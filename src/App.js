import React, { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons.js";
import Profile from "./components/Profile/Profile.js";
import ProfileData from "./components/Profile/Profile.json";
import Statistic from "./components/Statistic/Statistic.js";
import StatData from "./components/Statistic/statistical-data.json";
import Friends from "./components/Friends/Friends.js";
import FriendsJSON from "./components/Friends/friends.json";
import Transactions from "./components/Transactions/Transactions.js";
import transactions from "./components/Transactions/transactions.json";
const App = () => {
  const [selectId, setSelectId] = useState(null);
  let context = null;

  switch (selectId) {
    case "1":
      return (context = (
        <Profile
          onClick={setSelectId}
          name={ProfileData.name}
          tag={ProfileData.tag}
          location={ProfileData.location}
          avatar={ProfileData.avatar}
          stats={ProfileData.stats}
        />
      ));
    case "2":
      return (context = (
        <Statistic
          onClick={setSelectId}
          title="Upload stats"
          stats={StatData}
        />
      ));
    case "3":
      return (context = (
        <Friends onClick={setSelectId} friends={FriendsJSON} />
      ));
    case "4":
      return (context = (
        <Transactions onClick={setSelectId} items={transactions} />
      ));
  }

  return (
    <div>
      {context}
      <Buttons onClick={setSelectId} />
    </div>
  );
};

export default App;
