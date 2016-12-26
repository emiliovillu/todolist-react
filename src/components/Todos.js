import React, {Component} from 'react'

export default class Todos extends Component {
  render () {
    return (
      <div>
       { this.props.todos.map((todo, index) => <p key={index}>{todo}</p>) }
      </div>
    )
  }
}
