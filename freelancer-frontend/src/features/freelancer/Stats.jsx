import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";

import { toPersianNumbers } from "../../utils/toPersianNumbers";

import Stat from "../../ui/Stat";

const Stats = ({ proposals }) => {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => curr.price + acc, 0);

  return (
    <div className="grid grid-cols-2 gap-x-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="Requests"
        value={numOfProposals}
        color="primary"
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="Assigned Requests"
        value={acceptedProposals}
        color="green"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title="Wallet"
        value={toPersianNumbers(balance)}
        color="yellow"
      />
    </div>
  );
};

export default Stats;
