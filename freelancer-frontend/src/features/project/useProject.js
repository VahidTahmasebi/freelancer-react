import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProjectApi } from "../../services/projectService";

export default function useProject() {
  const { id } = useParams();

  const { isLoading, data } = useQuery({
    // second index
    // Whenever the ID changes, the key changes as well
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id),
    retry: false,
  });
  const { project } = data || {};
  return { isLoading, project };
}
