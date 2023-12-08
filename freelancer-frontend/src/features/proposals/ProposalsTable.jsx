import useProposals from "./useProposals";

import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import { ProposalRow } from "./ProposalRow";

const ProposalsTable = () => {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;

  if (!proposals.length) return <Empty resource="Proposals" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Description</th>
        <th>Duration</th>
        <th>Budget</th>
        <th>Status</th>
      </Table.Header>

      <Table.Body>
        {proposals.map((proposals, index) => (
          <Table.Row key={proposal._id}>
            <ProposalRow index={index} proposal={proposal} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProposalsTable;
