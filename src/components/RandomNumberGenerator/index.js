// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGeneration = () => {
    this.setState(() => ({count: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="random-num-app">
        <div className="random-num-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-btn"
            onClick={this.onGeneration}
          >
            Generate
          </button>
          <p className="counter-num">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
