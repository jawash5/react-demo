import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = { id: nanoid(), name, age }
    this.props.add(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  render() {
    return (
      <div>
        <h1>我是Person组件, Count组件值为{this.props.count}</h1>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        &nbsp;
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        />
        &nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map((p) => {
            return (
              <li key={p.id}>
                {p.name}--{p.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state) => ({ persons: state.person, count: state.count }),
  {
    add: createAddPersonAction
  }
)(Person)
