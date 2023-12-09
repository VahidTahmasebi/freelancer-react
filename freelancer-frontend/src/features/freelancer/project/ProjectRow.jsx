import { MdAssignmentAdd } from "react-icons/md";

import truncateText from "../../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import toLocalDateShort from "../../../utils/toLocalDateShort";

import Table from "../../../ui/Table";

const projectStatus = {
  OPEN: { label: "باز", className: "budge--success" },
  CLOSED: { label: "بسته", className: "budge--danger" },
};

export const ProjectRow = ({ index, project }) => {
  const { status } = project;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      {/* <td>{project.tags.join("-")}</td> */}

      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>

      <td>
        <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
      </td>
    </Table.Row>
  );
};
