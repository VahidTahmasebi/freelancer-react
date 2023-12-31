import { useState } from "react";

import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

// index 0, 1, 2
const statusStyle = [
  { label: "Failed", className: "badge--danger" },
  { label: "Awaiting confirmation", className: "badge--secondary" },
  { label: "Accepted", className: "badge--success" },
];

export const ProposalRow = ({ index, proposal }) => {
  const { _id, user, description, duration, price, status } = proposal;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user?.name || "-"}</td>
      <td>{truncateText(description, 50)}</td>
      <td>{duration} days</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}></span>
        {statusStyle[status].label}
      </td>

      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsOpen(true)}>Change request</button>
            <Modal
              title="Change request status"
              open={isOpen}
              onClose={() => setIsOpen(false)}>
              <ChangeProposalStatus
                proposalId={_id}
                onClose={() => setIsOpen(false)}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
};
