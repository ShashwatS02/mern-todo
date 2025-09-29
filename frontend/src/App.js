import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

// The C++ 'using namespace std;' is a directive used in C++ to avoid prefixing
// standard library functions with 'std::'. JavaScript/React does not have an
// equivalent concept, as modules are imported and used directly.

// --- CSS Styles ---
// All styles are included directly in the component to avoid external files.
const styles = `
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #f4f4f9;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    .app-container {
        width: 100%;
        max-width: 500px;
        margin: 2rem;
    }

    .todo-container {
        background: #fff;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden; /* To contain the status bar */
    }
    
    .loading-container {
        text-align: center;
        padding: 4rem;
        font-size: 1.2rem;
        color: #555;
    }

    h1 {
        text-align: center;
        color: #333;
        margin-top: 1.5rem; /* Add space below status bar */
    }
    
    .status-bar {
        color: white;
        text-align: center;
        padding: 0.5rem;
        font-weight: bold;
        border-radius: 10px 10px 0 0;
        margin: -2rem -2rem 1.5rem -2rem; /* Pull it to the top */
        transition: background-color 0.3s ease;
    }
    .status-bar.connected { background-color: #28a745; }
    .status-bar.disconnected { background-color: #d8000c; }
    .status-bar.connecting { background-color: #ffc107; color: #333; }


    .input-form {
        display: flex;
        margin-bottom: 1.5rem;
    }

    .input-form input {
        flex: 1;
        padding: 0.8rem;
        border: 1px solid #ddd;
        border-radius: 5px 0 0 5px;
        font-size: 1rem;
    }

    .input-form button {
        padding: 0.8rem 1.2rem;
        border: none;
        background-color: #5c67f2;
        color: white;
        cursor: pointer;
        border-radius: 0 5px 5px 0;
        font-size: 1rem;
        transition: background-color 0.2s;
    }

    .input-form button:hover {
        background-color: #4a54c4;
    }
    
    .input-form input:disabled, .input-form button:disabled {
        background-color: #e9ecef;
        cursor: not-allowed;
        opacity: 0.7;
    }

    .todo-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .todo-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8rem;
        background: #f9f9f9;
        border-radius: 5px;
        border-left: 5px solid #5c67f2;
        transition: background-color 0.2s;
    }

    .todo-item span {
        cursor: pointer;
        flex-grow: 1;
        margin-right: 1rem;
    }

    .todo-item button {
        background: #e74c3c;
        color: white;
        border: none;
        padding: 0.4rem 0.8rem;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .todo-item button:hover {
        background: #c0392b;
    }

    .error-container {
        text-align: center;
        padding: 1rem;
    }
    .error-container .error-icon {
        width: 60px;
        height: 60px;
        margin: 0 auto 1rem auto;
        color: #d8000c;
    }
    .error-container h3 {
        margin-top: 0;
        color: #a00000;
        font-size: 1.5rem;
    }
    .error-container p {
        margin: 0 0 1.5rem 0;
        line-height: 1.5;
        color: #333;
    }
    .error-container .troubleshooting-steps {
        margin: 1.5rem 0;
        padding: 0;
        list-style-type: none;
        text-align: left;
    }
    .error-container li {
        margin-bottom: 1rem;
        display: flex;
        align-items: flex-start;
    }
    .error-container .step-number {
        background-color: #d8000c;
        color: white;
        font-weight: bold;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
        flex-shrink: 0;
    }
    .error-container code {
        background-color: #ffe5e5;
        color: #a00000;
        padding: 3px 6px;
        border-radius: 4px;
        font-family: monospace;
    }
    .fake-terminal {
        background-color: #2d2d2d;
        color: #f0f0f0;
        font-family: monospace;
        padding: 1rem;
        border-radius: 5px;
        text-align: left;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
    }
    .fake-terminal pre {
        margin: 0;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .fake-terminal .prompt { color: #87d7ff; }
    .fake-terminal .success { color: #50fa7b; font-weight: bold; }

    .retry-button {
        padding: 0.8rem 1.2rem;
        width: 100%;
        border: none;
        background-color: #d8000c;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: bold;
        transition: background-color 0.2s;
        display: block;
        margin-top: 1.5rem;
        animation: pulse 2s infinite;
    }
    .retry-button:hover {
        background-color: #a00000;
        animation: none;
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }
`;

// --- API Client Setup ---
const API_URL = "http://localhost:5000/api/todos";
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

// --- TodoItem Component ---
function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      <span onClick={() => toggleComplete(todo._id)}>{todo.task}</span>
      <button onClick={() => deleteTodo(todo._id)}>X</button>
    </div>
  );
}

// --- Main App Component ---
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  const fetchTodos = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setIsConnected(false);
    try {
      const response = await apiClient.get("/");
      setTodos(response.data);
      setIsConnected(true);
    } catch (err) {
      console.error("API Error!", err);

      let errorReason = "An unknown error occurred.";
      if (err.code === "ECONNABORTED") {
        errorReason =
          "The connection timed out because the server is not responding.";
      } else if (err.message === "Network Error") {
        errorReason =
          "A network error occurred. The app could not connect to the server.";
      }
      setError(errorReason);
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleApiError = (operation, error) => {
    console.error(`Failed to ${operation} todo`, error);
    fetchTodos();
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {
      await apiClient.post("/add", { task: input, completed: false });
      setInput("");
      fetchTodos();
    } catch (err) {
      handleApiError("add", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await apiClient.delete(`/${id}`);
      fetchTodos();
    } catch (err) {
      handleApiError("delete", err);
    }
  };

  const toggleComplete = async (id) => {
    try {
      await apiClient.put(`/${id}`);
      fetchTodos();
    } catch (err) {
      handleApiError("update", err);
    }
  };

  const renderStatusBar = () => {
    if (isLoading) {
      return <div className="status-bar connecting">Connecting...</div>;
    }
    if (error) {
      return <div className="status-bar disconnected">Disconnected</div>;
    }
    if (isConnected) {
      return <div className="status-bar connected">Connected</div>;
    }
    return null;
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="loading-container">
          Attempting to connect to server...
        </div>
      );
    }

    if (error) {
      return (
        <div className="error-container">
          <svg
            className="error-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h3>Backend Server is Offline</h3>
          <p>This app needs its backend to work. Please start your server.</p>
          <ol className="troubleshooting-steps">
            <li>
              <span className="step-number">1</span>
              <div>
                In your terminal, navigate to the <code>/backend</code>{" "}
                directory.
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div>
                Run the command <code>npm start</code> to launch the server.
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div>
                Look for the success message shown below in your terminal.
              </div>
            </li>
          </ol>
          <div className="fake-terminal">
            <pre>
              <span className="prompt">{">"}</span> npm start
              <br />
              ...
              <br />
              <span className="success">Server is running on port: 5000</span>
              <br />
              <span className="success">
                MongoDB database connection established successfully
              </span>
            </pre>
          </div>
          <button className="retry-button" onClick={fetchTodos}>
            I've started the server, Retry now!
          </button>
        </div>
      );
    }

    return (
      <>
        <form onSubmit={addTodo} className="input-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit">Add Task</button>
        </form>
        <div className="todo-list">
          {todos.length > 0 ? (
            [...todos]
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((todo) => (
                <TodoItem
                  key={todo._id}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                />
              ))
          ) : (
            <p style={{ textAlign: "center", color: "#888" }}>
              Your to-do list is empty!
            </p>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="app-container">
      <style>{styles}</style>
      <div className="todo-container">
        {renderStatusBar()}
        <h1>To-Do List</h1>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
