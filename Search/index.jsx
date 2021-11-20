import React, { Component } from 'react'
import { Input } from 'antd'

class Search extends Component {
  state = {
    inputValue: ''
  }

  pressEnter = () => {}

  setValue = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Input
          placeholder="请输入代办项"
          onChange={(event) => {
            this.setValue(event)
          }}
          onPressEnter={() => {
            this.pressEnter()
          }}
        />
      </div>
    )
  }
}

export default Search
