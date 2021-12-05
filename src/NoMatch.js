import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Container from './Container'

class NoMatch extends Component {
  render() {
    return (
      <div className="NoMatch">
          <Container>
            <h1>Nothing to see here!</h1>
            <Link className="main-link" to="/">Go to the home page</Link>
          </Container>
      </div>
    )
  }
}

export default NoMatch