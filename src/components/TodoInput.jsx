import React from "react";

export default function TodoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue, setSearchQuery } = props;

  return (
    <header>
      <div className="inputContainer">
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          placeholder="Enter Task's..."
        />
        <button
          onClick={() => {
            handleAddTodo(todoValue);
            setTodoValue("");
          }}
        >
          Add
        </button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="searchInput" // Apply the class for consistent width
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </header>
  );
}
