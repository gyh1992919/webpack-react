'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class Comment extends React.Component{
  render() {
    return (
      <h1>hello react</h1>
    )
  }
}

ReactDom.render(
  <Comment/>,
  document.getElementById('app')
)
