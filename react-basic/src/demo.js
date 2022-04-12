import { Component } from 'react'
export default class App1 extends Component {
  state = {
    count: 0,
  }
  change = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.change}>+1</button>
      </div>
    )
  }
}
