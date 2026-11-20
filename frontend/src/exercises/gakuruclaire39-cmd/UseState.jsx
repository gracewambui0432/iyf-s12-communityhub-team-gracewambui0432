// Task 16.1: useState Hook
// By Claire Gakuru

import { useState } from 'react';

// Exercise 1: Counter
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Exercise 2: Toggle
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <p>The toggle is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

// Exercise 3: Multiple State Variables
function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="Age" />
      <p>Name: {name} | Email: {email} | Age: {age}</p>
    </form>
  );
}

export default function UseStateTask() {
  return (
    <div>
      <h1>Task 16.1: useState Hook</h1>
      <h2>Exercise 1: Counter</h2>
      <Counter />
      <h2>Exercise 2: Toggle</h2>
      <Toggle />
      <h2>Exercise 3: UserForm</h2>
      <UserForm />
    </div>
  );
}
