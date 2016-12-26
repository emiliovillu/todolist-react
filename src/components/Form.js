import React, {Component} from 'react'

import Input from './Input'
import Todos from './Todos'

export default class Form extends Component {
  render () {
    return (
      <div>
        <Input />
        <Todos />
      </div>
    )
  }
}

