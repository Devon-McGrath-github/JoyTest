import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div className="menu-button">
      {/* temporarily hooked up to index page */}
      <Link to="/"><p>MENU placeholder</p></Link>
    </div>
  )
}
