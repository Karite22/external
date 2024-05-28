import React, { useState, useEffect, useContext,  useRef } from 'react';
import './App.css';

// Hook Demonstration Components

const UseStateComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>useState</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 500);
  });
  return (
    <div className="card">
      <h2>useEffect</h2>
      <p>Current Time: {count}</p>
    </div>
  );
};

const ThemeContext = React.createContext();

const UseContextComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`}>
      <h2>useContext</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

const UseRefComponent = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="card">
      <h2>useRef</h2>
      <input ref={inputRef} type="text" placeholder="Focus me with a button" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <header className="header">
          <h1>React Hooks Demo</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            Toggle Theme
          </button>
        </header>
        <main className="main">
          <UseStateComponent />
          <UseEffectComponent />
          <UseContextComponent />
          <UseRefComponent />
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
