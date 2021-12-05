import React, { Component } from 'react'
import './Container.css'

class Container extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Container-box">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Container