import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";

import Stat from "../../ui/Stat";

const Stats = ({ proposals, project, users }) => {
  return (
    <div className="grid grid-cols-2 gap-x-8">
      <Stat
        icon={<HiUser className="w-20 h-20" />}
        title="Users"
        value={users}
        color="yellow"
      />
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="Requests"
        value={proposals}
        color="primary"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title="Projects"
        value={project}
        color="green"
      />
    </div>
  );
};

export default Stats;
