import useMoveBack from "../hooks/useMoveBack";

import { HiArrowRight } from "react-icons/hi";

const NotFound = () => {
  const moveBack = useMoveBack();

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="sm:max-w-sm flex justify-center items-center pt-10">
        <div>
          <h1 className="mb-8 text-xl font-bold text-secondary-700">
            The page you were looking for was not found
          </h1>
          <button onClick={moveBack}>
            <HiArrowRight className="w-6 h-6 text-primary-900" />
            <span>Back </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
