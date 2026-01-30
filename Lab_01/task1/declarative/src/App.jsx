import { useState } from 'react';
import './App.css';

function App() {
  // state controls highlight
  const [isHighlighted, setIsHighlighted] = useState(false);

  function toggleHighlight() {
    setIsHighlighted(!isHighlighted);
  }

  return (
    <div>
      <button onClick={toggleHighlight}>Toggle Highlight</button>

      <p className={isHighlighted ? 'highlight' : ''}>
        This paragraph is controlled by React state.
      </p>
    </div>
  );
}

export default App;
