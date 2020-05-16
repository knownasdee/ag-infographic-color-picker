import React, {Component} from 'react'
import {render} from 'react-dom'

import ColorPickerComponent from '../../src'

export default class Demo extends Component {
  render() {
    return <div>
      <h1>ag-infographic-color-picker Demo</h1>
      <ColorPickerComponent/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
