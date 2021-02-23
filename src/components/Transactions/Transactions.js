import React from "react";
import Buttons from "../Buttons";
import "./transactions.css";
import PropTypes from "prop-types";

const Transactions = ({ onClick, items }) => {
  let cardTable = items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
  return (
    <div className="transactions">
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>{cardTable}</tbody>
      </table>
      <Buttons onClick={onClick} />
    </div>
  );
};
export default Transactions;

Transactions.propTypes = {
  items: PropTypes.array,
};
