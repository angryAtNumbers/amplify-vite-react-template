import "./App.css";
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    const content = window.prompt("Todo content");
    if (content) {
      client.models.Todo.create({ content });
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Pipit</div>
        <nav className="nav">
          <button className="nav-button">Button 1</button>
          <button className="nav-button">Button 2</button>
          <button className="nav-button">Button 3</button>
          <button className="nav-button">Button 4</button>
        </nav>
      </header>
      <main className="main">
        <h1 className="title">My todos</h1>
        <button onClick={createTodo} className="create-todo-button">+ new</button>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">{todo.content}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
