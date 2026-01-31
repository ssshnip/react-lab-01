import { useState } from "react";

// StepCounter uses props for initial values
// and state for changing data inside the component
function StepCounter({ initialValue = 0, step = 1}) {
    const [count, setCount] = useState(initialValue);
    const [history, setHistory] = useState([]);
    const [operationCount, setOperationCount] = useState(0);

    function increment() {
        const newValue = count + step;
        setCount(newValue);
        setHistory([...history, newValue]);
        setOperationCount(operationCount + 1);
    }

    function decrement() {
        const newValue = count - step;
        setCount(newValue);
        setHistory([...history, newValue]);
        setOperationCount(operationCount + 1);
    }

    function reset() {
        setCount(initialValue);
        setHistory([]);
        setOperationCount(0);
    }

    return (
        <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <h3>Step Counter</h3>
      <p>Current value: {count}</p>
      <p>Total operations: {operationCount}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h4>History (last 5)</h4>
      <ul>
        {history.slice(-5).map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
    );
}

function CounterApp() {
  return (
    <div>
      {/* props pass initial values,
          state stores and updates data inside each counter */}
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}

export default CounterApp;