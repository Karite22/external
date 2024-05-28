import React from 'react';
import ClassComponent from './Class';
import FunctionalComponent from './Function';
import './App.css';


function App() {
  return (
    <div className="app-container"> 
      <h1 className="app-header">Parent Component</h1>
      <div className="components-container">
        <ClassComponent name="Maruthi" age={20} rollnum={191} />
        <FunctionalComponent name="Reddy" age={18} rollnum={191} />
      </div>
    </div>
  );
}

export default App;
