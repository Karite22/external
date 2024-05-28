import React, { Component } from 'react';
import './Class.css';

class ClassComponent extends Component {
  render() {
    const { name, age, rollnum } = this.props;
    return (
      <div className="class-component card">
        <h2>Class Component</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Roll Number: {rollnum}</p>
      </div>
    );
  }
}

export default ClassComponent;
