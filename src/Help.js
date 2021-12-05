import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Container from './Container'

class Help extends Component {
  render() {
    return (
      <div className="Help">
          <Container>
            <h1>Help</h1>
            <Link className="main-link" to="/">Home</Link>
          </Container>
      </div>
    )
  }
}

export default Help