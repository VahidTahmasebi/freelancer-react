import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import { ProjectRow } from "../projects/ProjectRow";
import { ProposalRow } from "./ProposalRow";

const ProposalsTable = ({ proposals }) => {
  if (proposals.length) return <Empty resourceName="requested" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Freelancer</th>
        <th>Description</th>
        <th>Duration</th>
        <th>Budget</th>
        <th>Status</th>
        <th>Operation</th>
      </Table.Header>

      <Table.Body>
        {proposals.map((proposal, index) => (
          <Table.Row key={proposal._id}>
            <ProposalRow index={index} proposal={proposal} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProposalsTable;
