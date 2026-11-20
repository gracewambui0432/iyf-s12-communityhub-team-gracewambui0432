// Task 16.3: State with Arrays & Objects
// By Grace Wambui

import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  // Add item - CORRECT: creates new array
  const addTodo = () => {
    if (!inputValue.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue('');
  };

  // Toggle item - CORRECT: creates new object
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Remember: Never mutate state directly!
          ❌ todos.push(newTodo)
          ✅ setTodos([...todos, newTodo]) */}
    </div>
  );
}

export default function TodoListTask() {
  return (
    <div>
      <h1>Task 16.3: State with Arrays & Objects</h1>
      <h2>Exercise 1: Managing a List</h2>
      <TodoList />
    </div>
  );
}
