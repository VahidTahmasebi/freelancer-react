import { useState } from "react";

import { HiOutline } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";

import useRemoveProject from "./useRemoveProject";

import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";

export const ProjectRow = ({ index, project }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { isDeleting, removeProject } = useRemoveProject();

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
        <ToggleProjectStatus project={project} />
        {/* {project.status === "OPEN" ? (
          <span className="badge badge--success">Open</span>
        ) : (
          <span className="badge badge--danger">Close</span>
        )} */}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
              title={`${project.title} Edit`}>
              <CreateProjectForm
                onClose={() => setIsEditOpen(false)}
                projectEdit={project}
              />
            </Modal>
          </>
          <>
            <button onClick={setIsDeleteOpen(true)}>
              <HiOutline className="w-5 h-5 text-error" />
            </button>
            <Modal
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
              title={`${project.title} Delete`}>
              <ConfirmDelete
                resourceName={project.title}
                disabled={false}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
};
