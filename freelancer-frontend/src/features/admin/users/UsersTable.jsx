import useUsers from "../useUsers";

import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import { UserRow } from "./UserRow";

const UsersTable = () => {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Loading />;

  if (!users.length) return <Empty resource="User" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Role</th>
        <th>Status</th>
        <th>Operation</th>
      </Table.Header>

      <Table.Body>
        {users.map((user, index) => (
          <Table.Row key={user._id}>
            <UserRow index={index} user={user} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default UsersTable;
