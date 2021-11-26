import { connect } from 'react-redux'
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction
} from '../../redux/actions/count'
import React, { Component } from 'react'

class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(parseInt(value))
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(parseInt(value))
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(parseInt(value))
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(parseInt(value), 500)
  }

  render() {
    return (
      <div>
        <h1>我是Count组件, Person人数为{this.props.person.length}</h1>
        <h3>当前求和为：{this.props.count}</h3>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{' '}
        &nbsp;
        <button onClick={this.increment}>+</button>
        &nbsp;
        <button onClick={this.decrement}>-</button>
        &nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        &nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

// 使用 connect()() 创建并暴露一个Count的容器组件
export default connect(
  (state) => ({ count: state.count, person: state.person }),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(Count)
