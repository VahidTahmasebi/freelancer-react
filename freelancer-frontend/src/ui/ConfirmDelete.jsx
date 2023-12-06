const ConfirmDelete = ({ resourceName, disabled, onClose }) => {
  return (
    <div>
      <h2 className="mb-8 text-base font-bold">
        Are you sure you want to remove {resourceName}?
      </h2>
      <div className="flex justify-center items-center gap-x-16">
        <button
          disabled={disabled}
          onClick={onClose}
          className="btn btn--primary flex-1">
          Cancel
        </button>
        <button className="btn btn--danger flex-1 py-3">Delete</button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
