import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import styles from "./Home.module.css";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: task.trim(), completed: false },
      ]);
      setTask("");
    }
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add a new task</h2>
      <div className={styles.inputGroup}>
        <Input
          id="todo-input"
          type="text"
          placeholder="Enter your task"
          value={task}
          setValue={setTask}
          required={true}
          onKeyDown={handleKeyPress}
        />
        <Button role="addTask" text="Add Task" onClick={addTodo} />
      </div>

      {sortedTodos.length === 0 ? (
        <p className={styles.noTask}>No task available</p>
      ) : (
        <ul className={styles.todoList}>
          {sortedTodos.map((todo) => (
            <li
              key={todo.id}
              className={`${styles.todoItem} ${
                todo.completed ? styles.completed : ""
              }`}
            >
              <div className={styles.todoLeft}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className={styles.checkbox}
                />
                <span
                  className={`${todo.completed ? styles.completedText : ""}`}
                >
                  {todo.text}
                </span>
              </div>
              <Button
                role="deleteBtn"
                text="Delete"
                onClick={() => deleteTodo(todo.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
