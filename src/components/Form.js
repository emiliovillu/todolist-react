import React, {Component} from 'react'

import Input from './Input'
import Todos from './Todos'

export default class Form extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {todos: []}
  }

  render () {
    const {todos} = this.state
    return (
      <div>
        <Input handleAddTodo={todo => this.setState({todos: todos.concat([todo])})}/>
        <Todos todos={todos}/>
      </div>
    )
  }
}
