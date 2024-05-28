// import React from 'react';
// import LifecycleDemo from './lifecycle';

// function App() {
//   const [showLifecycleDemo, setShowLifecycleDemo] = React.useState(true);

//   const toggleLifecycleDemo = () => {
//     setShowLifecycleDemo(!showLifecycleDemo);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={toggleLifecycleDemo}>
//           {showLifecycleDemo ? 'Hide' : 'Show'} LifecycleDemo
//         </button>
//         {showLifecycleDemo && <LifecycleDemo />}
//       </header>
//     </div>
//   );
// }

// export default App;

// ----------------------------- 7
import React, { useState, useEffect, useContext, useReducer, useRef, createContext } from 'react';

// Creating a Context
const MyContext = createContext();

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const HooksDemo = () => {
  // useState Hook
  const [name, setName] = useState('React');

  // useReducer Hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // useRef Hook
  const inputRef = useRef(null);

  // useEffect Hook
  useEffect(() => {
    console.log('useEffect: Component mounted or updated');
    inputRef.current.focus(); // Focus the input field on mount

    return () => {
      console.log('useEffect Cleanup: Component will unmount');
    };
  }, [name, state.count]); // Runs when 'name' or 'state.count' changes

  // useContext Hook
  const value = useContext(MyContext);

  return (
    <div>
      <h1>Understanding React Hooks</h1>
      <div>
        <h2>useState</h2>
        <p>Name: {name}</p>
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <h2>useReducer</h2>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>
      <div>
        <h2>useContext</h2>
        <p>Context Value: {value}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <MyContext.Provider value="This is context value">
      <HooksDemo />
    </MyContext.Provider>
  );
};

export default App;