import React from "react";
import "./Buttons.css";
const Buttons = ({ onClick }) => {
  return (
    <div className="buttons-item">
      <button
        type="button"
        onClick={() => {
          onClick("1");
        }}
      >
        Профиль социальной сети
      </button>
      <button
        type="button"
        onClick={() => {
          onClick("2");
        }}
      >
        Секция статистики
      </button>
      <button
        type="button"
        onClick={() => {
          onClick("3");
        }}
      >
        Список друзей
      </button>
      <button
        type="button"
        onClick={() => {
          onClick("4");
        }}
      >
        История транзакций
      </button>
    </div>
  );
};

export default Buttons;
