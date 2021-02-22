import React from "react";
import Buttons from "../../components/Buttons";
import "./Profile.css";
const Profile = ({ onClick, name, tag, location, avatar, stats }) => {
  return (
    <div className='style-card'>
      <div className="content">
        <div className="profile">
          <div className="description">
            <img src={avatar} alt="Аватар пользователя" className="avatar" />
            <p className="name">{name}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
          </div>

          <ul className="stats">
            <li className="stats_item">
              <span className="label">Followers</span>
              <span className="quantity">{stats.followers}</span>
            </li>
            <li className="stats_item">
              <span className="label">Views</span>
              <span className="quantity">{stats.views}</span>
            </li>
            <li className="stats_item">
              <span className="label">Likes</span>
              <span className="quantity">{stats.likes}</span>
            </li>
          </ul>
        </div>
        <Buttons onClick={onClick} className="buttons-item" />
      </div>
    </div>
  );
};
export default Profile;
