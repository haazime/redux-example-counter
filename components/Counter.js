import React, { Component } from 'React'

export default class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: 0 times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
      </p>
    )
  }
}
