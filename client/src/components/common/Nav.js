import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/">
        <p><strong>PIEKEA</strong></p>
      </Link>
      <Link to="/pies">
        <p>All Pies</p>
      </Link>
      <Link to="/profile">
        <p>My Account</p>
      </Link>
      <Link to="/basket">
        <p>Checkout</p>
      </Link>
      <Link to="/register">
        <p>Register</p>
      </Link>
      <Link to="/login">
        <p>Login</p>
      </Link>
    </nav>
  )
}

export default Nav