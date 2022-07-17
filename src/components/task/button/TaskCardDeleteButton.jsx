import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton = (id) => {
    /* タスクカードを削除する */
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardsDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </button>
    </div>
  );
};
