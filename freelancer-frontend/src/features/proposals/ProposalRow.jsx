import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

import Table from "../../ui/Table";

// index 0, 1, 2
const statusStyle = [
  { label: "Failed", className: "badge--danger" },
  { label: "Awaiting confirmation", className: "badge--secondary" },
  { label: "Accepted", className: "badge--success" },
];

export const ProposalRow = ({ index, proposal }) => {
  const { description, duration, price, status } = proposal;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 50)}</td>
      <td>{toPersianNumbers(duration)} days</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}></span>
        {statusStyle[status].label}
      </td>
    </Table.Row>
  );
};
