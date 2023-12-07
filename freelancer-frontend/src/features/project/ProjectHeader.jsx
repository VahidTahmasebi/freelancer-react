import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

const ProjectHeader = ({ project }) => {
  const moveBack = useMoveBack();

  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={moveBack}>
        <HiArrowRight className="w-5 h-5 text-secondary-500" />
      </button>
      <h1 className="text-xl font-bold text-secondary-700">
        {project.title} requests List
      </h1>
    </div>
  );
};

export default ProjectHeader;
