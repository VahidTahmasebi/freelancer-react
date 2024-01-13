import { useState } from "react";

import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

const statusStyle = [
  { label: "Failed", className: "badge--danger" },
  { label: "Awaiting confirmation", className: "badge--secondary" },
  { label: "Accepted", className: "badge--success" },
];

export const UserRow = ({ index, user }) => {
  const { status, name, email, phoneNumber, role, _id } = user;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{role}</td>
      {/* <td>{users.tags.join("-")}</td> */}

      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>

      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsOpen(true)}>Change request</button>
            <Modal
              title="Change request status"
              open={isOpen}
              onClose={() => setIsOpen(false)}>
              <ChangeUserStatus userId={_id} onClose={() => setIsOpen(false)} />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
};
