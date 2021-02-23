import React from "react";
import Buttons from "../Buttons";
import "./Friends.css";
import PropTypes from "prop-types";

const Friends = ({ onClick, friends }) => {
  let cardFriends = friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className="item" key={id}>
        {isOnline ? (
          <span className={"green"}></span>
        ) : (
          <span className={"red"}></span>
        )}
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
Friends.propTypes = {
  friends: PropTypes.array,
};
export default Friends;
