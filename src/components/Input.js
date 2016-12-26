import React, {Component} from 'react'

export default class Input extends Component {
  render () {
    return (
      <div>
        <input type='text' placeholder='Introduce TODO' ref={node => this._input = node}/>
        <button onClick={this._handleAddTodo}>Add Todo</button>
      </div>
    )
  }

  _handleAddTodo = () => {
    this.props.handleAddTodo(this._input.value)
    this._input.value = ''
  }
}
