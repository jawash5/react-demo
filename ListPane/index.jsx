import React, { Component } from 'react'
import { Card, Checkbox } from 'antd'

class ListPane extends Component {
  state = {
    list: [{ id: '001', text: '写一个 todoList', check: false }]
  }

  changeStatus = (event) => {
    console.log(event.target)

    this.setState({
      list: [{ id: '001', text: new Date().toLocaleString(), check: false }]
    })
  }

  render() {
    const { list } = this.state

    return (
      <div>
        <Card bordered={false} style={{ width: 300 }}>
          {list.map(({ id, text, check }) => {
            return (
              <Checkbox
                key={id}
                checked={check}
                onChange={(event) => this.changeStatus(event)}
              >
                {text}
              </Checkbox>
            )
          })}
        </Card>
      </div>
    )
  }
}

export default ListPane
