import React from "react";
import Buttons from "../Buttons";
import "./Friends.css";

const Friends = ({ onClick, friends }) => {
  let colorClass = null;
  let cardFriends = friends.map(({ avatar, name, isOnline, id }) => {
    if (isOnline) {
      colorClass = "green";
    } else {
      colorClass = "red";
    }
    return (
      <li className="item" key={id}>
        <span className={colorClass}></span>
        <img className="avatars" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    );
  });
  return (
    <div>
      <ul className="friend-list">{cardFriends}</ul>
      <Buttons onClick={onClick} />
    </div>
  );
};

export default Friends;
