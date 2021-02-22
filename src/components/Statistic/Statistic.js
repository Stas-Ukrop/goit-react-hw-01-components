import React, { useState } from "react";
import Buttons from "../Buttons.js";
import "./Statistic.css";
const Statistic = ({ onClick, title, stats }) => {
  let hText = null;
  const card = stats.map(({ id, label, percentage }) => {
    return (
      <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    );
  });
  if (title) {
    hText = <h2 className="title">{title}</h2>;
  }
  return (
    <div>
      <section className="statistics">
        {hText}

        <ul className="stat-list">{card}</ul>
      </section>
      <Buttons onClick={onClick} />
    </div>
  );
};
export default Statistic;
