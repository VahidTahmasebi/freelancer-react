import useProjects from "../../../hooks/useProject";

import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";

import { ProjectRow } from "./ProjectRow";

const ProjectsTable = () => {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resource="Project" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Subject</th>
        <th>Budget</th>
        <th>Deadline</th>
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

export default ProjectsTable;
