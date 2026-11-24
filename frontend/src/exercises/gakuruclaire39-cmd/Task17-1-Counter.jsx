import { useState, useEffect } from 'react';

export default function Task17_1_Counter() {
  const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    console.log('Effect ran! Count is:', count);
  });

  // Runs only on mount
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log('Count changed to:', count);
    document.title = `Count: ${count}`;
  }, [count]);

  // Cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log('Cleaned up!');
    };
  }, []);

  return (
    <div>
      <h2>17.1 Exercise 1 - Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}