import { useState } from "react";

import { MdAssignmentAdd } from "react-icons/md";

import truncateText from "../../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import toLocalDateShort from "../../../utils/toLocalDateShort";

import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const projectStatus = {
  OPEN: { label: "باز", className: "budge--success" },
  CLOSED: { label: "بسته", className: "budge--danger" },
};

export const ProjectRow = ({ index, project }) => {
  const { status, title, budget, duration } = project;

  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(duration)}</td>
      {/* <td>{project.tags.join("-")}</td> */}

      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>

      <td>
        <Modal
          open={open}
          onClose={() => setOpen(true)}
          title="Project requests">
          <CreateProposal
            projectId={project._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
};
