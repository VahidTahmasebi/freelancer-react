import useToggleProjectStatus from "./useToggleProjectStatus";
 
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

const ToggleProjectStatus = ({ project }) => {
  const { _id, status } = project;
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ id: _id, data: { newStatus } });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading width={50} height={20} />
      ) : (
        <Toggle
          label={status === "OPEN" ? "open" : "close"}
          enabled={status === "OPEN" ? true : false}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
};

export default ToggleProjectStatus;
