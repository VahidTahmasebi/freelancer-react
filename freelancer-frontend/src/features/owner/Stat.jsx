const colors = {
  primary: "text-primary-700 bg-primary-100",
  green: "text-green-700 bg-green-100",
  yellow: "text-yellow-700 bg-yellow-100",
};

const Stat = ({ icon, title, value, color }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-[6.4rem_1fr] col-span-1 gap-x-4 p-4 rounded-lg bg-secondary-0">
      <div
        className={`row-span-2 flex justify-center items-center p-2 rounded-full aspect-square ${colors[color]}`}>
        {icon}
      </div>
      <h5 className="self-center text-lg font-bold text-secondary-500">
        {title}
      </h5>
      <p className="text-3xl font-bold text-secondary-900">{value}</p>
    </div>
  );
};

export default Stat;
