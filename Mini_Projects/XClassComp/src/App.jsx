import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      count: 0,
    }
  }

  increment = () => {
    this.setState((preState) => ({count: preState.count+1}))
  }
  decrement = () => {
    this.setState((preState) => ({count: preState.count-1}))
  }
  render(){
    return (
      <div>
        <h1>Counter App</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>
          Increment
        </button>
        <button onClick={this.decrement}>
          Decrement
        </button>
      </div>
    )
  }
  
}

export default App
