import { Component } from "react";

class Counter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}
export default Counter