import React, { useState } from "react";
import Buttons from "../Buttons.js";
import "./Statistic.css";
import PropTypes from "prop-types";

const Statistic = ({ onClick, title, stats }) => {
  const card = stats.map(({ id, label, percentage }) => {
    return (
      <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    );
  });

  return (
    <div>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">{card}</ul>
      </section>
      <Buttons onClick={onClick} />
    </div>
  );
};

export default Statistic;

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
