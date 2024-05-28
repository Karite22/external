import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is being constructed');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps: Syncing state with props if needed');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted to the DOM');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Deciding whether to re-render');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capturing snapshot of the DOM before updates');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component has been updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is being removed from the DOM');
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('Render: Rendering the component');
    return (
      <div>
        <h1>React Lifecycle Methods</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
