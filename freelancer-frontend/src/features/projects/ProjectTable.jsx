import useOwnerProjects from "./useOwnerProjects";

import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";

import { ProjectRow } from "./ProjectRow";

const ProjectTable = () => {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resource="Project" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Subject</th>
        <th>Category</th>
        <th>Budget</th>
        <th>Deadline</th>
        <th>Tags</th>
        <th>Freelancer</th>
        <th>Status</th>
        <th>Operation</th>
      </Table.Header>

      <Table.Body>
        {projects.map((project, index) => (
          <Table.Row key={project._id}>
            <ProjectRow index={index} project={project} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectTable;
