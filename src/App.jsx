
import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import icon from "./assets/icon.png"; // Import the icon image

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { text: newTodo, completed: false }];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => index !== todoIndex);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index].text;
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  function handleCompleteTodo(index) {
    const newTodoList = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, completed: !todo.completed } : todo
    );
    persistData(newTodoList);
    setTodos(newTodoList);
    alert("Task marked as complete!");
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  // Filter todos based on search query
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* New Title and Icon */}
      <div className="headerContainer">
        <img src={icon} alt="Todo Icon" className="todoIcon" />
        <h1>TODO-List</h1>
      </div>

      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
        setSearchQuery={setSearchQuery} // Pass the function to TodoInput
      />
      <div className="todoSections">
        <section>
          <h2>Tasks</h2>
          <TodoList
            todos={filteredTodos.filter((todo) => !todo.completed)}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        </section>
        <section>
          <h2>Completed</h2>
          <TodoList
            todos={filteredTodos.filter((todo) => todo.completed)}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        </section>
      </div>
    </>
  );
}

export default App;
