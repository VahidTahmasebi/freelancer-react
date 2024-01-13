import useProposals from "../proposals/useProposals";

import Loading from "../../ui/Loading";
import DashboardHeader from "../../ui/DashboardHeader";

import Stats from "./Stats";
import useProject from "../project/useProject";
import useUsers from "./useUsers";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();
  const { isLoading: isLoadingProject, project } = useProject();
  const { isLoading: isLoadingUsers, users } = useUsers();

  if (isLoading || isLoadingProject || isLoadingUsers) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        project={project.length}
        users={users.length}
      />
    </div>
  );
}
export default DashboardLayout;
