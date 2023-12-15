import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { queryString } from "query-string";

import { getProjectsApi } from "../services/projectService";

export default function useProjects() {
  const { search } = useLocation();
  // convert query string to object
  // The first method - best method
  const queryObject = queryString.parse(search);

  // The second method
  // const queryObject = Object.fromEntries(new URLSearchParams(search));

  const { isLoading, data } = useQuery({
    // You must update every time "queryObject" changes
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(search),
  });
  const { projects } = data || {};
  return { isLoading, projects };
}
