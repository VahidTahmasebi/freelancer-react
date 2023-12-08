import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";

import Stat from "./Stat";

const Stats = ({ projects }) => {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-2 gap-x-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="Projects"
        value={numOfProjects}
        color="primary"
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="Assigned projects"
        value={numOfAcceptedProjects}
        color="green"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title="Requests"
        value={numOfProposals}
        color="yellow"
      />
    </div>
  );
};

export default Stats;
