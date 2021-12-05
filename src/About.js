import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Container from './Container'

class About extends Component {
  render() {
    return (
      <div className="About">
          <Container>
            <h1>About</h1>
            <Link className="main-link" to="/">Home</Link>
          </Container>
      </div>
    )
  }
}

export default About