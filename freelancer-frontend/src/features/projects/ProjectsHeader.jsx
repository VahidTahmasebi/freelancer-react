import { useState } from "react";

import { HiOutlinePlus } from "react-icons/hi";

import Modal from "../../ui/Modal";

import CreateProjectForm from "./CreateProjectForm";

const ProjectsHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between mb-8">
      <h1 className="text-xl font-bold text-secondary-700">Your Projects</h1>
      <Modal title="Create Project" open={open} onClose={() => setOpen(false)}>
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2">
        <HiOutlinePlus />
        <span>Create</span>
      </button>
    </div>
  );
};

export default ProjectsHeader;
