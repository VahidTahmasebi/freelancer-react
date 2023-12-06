import { HiOutlineX } from "react-icons/hi";

import useOutsideClick from "../features/projects/useOutsideClick";

const Modal = ({ open, onClose, title, children }) => {
  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div className="w-full h-screen fixed top-0 left-0 z-50 bg-secondary-800 bg-opacity-30 backdrop-blur-sm">
        <div
          ref={ref}
          className="w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 rounded-lg bg-secondary-0 shadow-lg transition-all duration-500 ease-out overflow-y-auto">
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-b-secondary-300">
            <p className="text-base font-bold text-secondary-700">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
