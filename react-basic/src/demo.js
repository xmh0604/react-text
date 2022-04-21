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

class App2 extends Component {
  state = {
    number: 1,
    age: 2,
    name: '张三',
  }
  change = () => {
    this.setState({
      age: this.state.age + 1,
    })
  }
  render() {
    return (
      <ul>
        <li>大哥：{this.state.name}</li>
        <li onClick={this.change}>二哥：{this.state.age + 1}</li>
        <li>三弟：{}</li>
      </ul>
    )
  }
}

class public1 {
  constructor() {
    this.name = '印度阿三'
    this.fn = () => {
      console.log('不做大哥好多年')
    }
  }
  say() {
    alert('加油大佬')
  }
}

let sayHai = new public1()
sayHai.say()

class App extends Component {
  state = {
    msg: 'hello react',
  }
  change = (e) => {
    this.setState({
      msg: e.target.value,
    })
  }
  render() {
    return (
      <>
        <input type="text" value={this.state.msg} onClick={this.change} />
      </>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
