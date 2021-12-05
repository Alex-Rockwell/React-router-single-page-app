import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Container from './Container'

class Home extends Component {
  render() {
    return (
      <div className="Home">
          <Container>
                <h1>Home</h1>
                <ul className="link-container">
                  <li><Link className="main-link" to="/about">About</Link></li>
                  <li><Link className="main-link" to="/help">Help</Link></li>
                  <li><Link className="main-link" to="/contacts">Contacts</Link></li>
                </ul>
          </Container>
      </div>
    )
  }
}

export default Home