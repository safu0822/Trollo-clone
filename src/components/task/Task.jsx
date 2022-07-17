import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Task = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div>
          <div
            className="taskBox"
            key={task.id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <p className="taskText">{task.text}</p>
            <button
              className="taskTrashButton"
              onClick={() => handleDelete(task.id)}
            >
              <FontAwesomeIcon icon="fa-solid fa-trash-can" />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};
