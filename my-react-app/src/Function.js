import React from 'react';
import './Functional.css';

const FunctionalComponent = ({ name, age, rollnum }) => {
  return (
    <div className="functional-component card">
      <h2>Functional Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Roll Number: {rollnum}</p>
    </div>
  );
};

export default FunctionalComponent;
