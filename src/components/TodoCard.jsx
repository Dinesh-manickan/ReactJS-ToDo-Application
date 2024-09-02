import React from "react";

export default function TodoCard(props) {
  const {
    children,
    handleDeleteTodo,
    handleEditTodo,
    handleCompleteTodo,
    index,
    todos,
  } = props;
  const isCompleted = todos[index].completed;

  return (
    <li
      className="todoItem"
      style={{ backgroundColor: isCompleted ? "green" : "white" }}
    >
      {children}
      <div className="actionsContainer">
        {!isCompleted && (
          <>
            <button onClick={() => handleCompleteTodo(index)}>
              <i className="fa-solid fa-check"></i>
            </button>
            <button onClick={() => handleEditTodo(index)}>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </>
        )}
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
