import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      {/* <nav>
        <ul>
            <li><a href="/">{props.home}</a></li>
            <li>{props.about}</li>
            <li>Contact</li>
        </ul> */}

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">TextEditor</Link>
          <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupporterContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse" id='navbarSupportedContent'>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current='page'>{props.home}</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">{props.about}</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <div className="right">
                <input className='form-check-input' id='flexSwitchCheckDefault' onClick={props.toggleMode} type="checkbox" />
              </div>
              <label className='form-check-label' htmlFor="flexSwitchCheckDefault"> Enable Darkmode</label>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

Navbar.propTypes = {
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  home: 'Set home here',
  about: 'Set about here'
}
