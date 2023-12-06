import { HiOutline } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";

import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

import Table from "../../ui/Table";

export const ProjectRow = ({ index, project }) => {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      {/* <td>{project.tags.join("-")}</td> */}
      <td>
        <div className="max-w-[200px] flex items-center flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">Open</span>
        ) : (
          <span className="badge badge--danger">Close</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <button
          // onClick={}
          >
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>
          <button
          // onClick={}
          >
            <HiOutline className="w-5 h-5 text-error" />
          </button>
        </div>
      </td>
    </Table.Row>
  );
};
