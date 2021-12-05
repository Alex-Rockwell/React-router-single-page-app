import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Container from './Container'

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
          <Container>
            <h1>Contacts</h1>
            <Link className="main-link" to="/">Home</Link>
          </Container>
      </div>
    )
  }
}

export default Contacts