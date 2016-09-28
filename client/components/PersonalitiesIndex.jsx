import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div className="IndexContainer">
        <div className="menu">
          <p>replace with menu img</p>
        </div>

        <h3 className="title-mid">What is branding?</h3>

        <Link to='page-1'><p>button</p></Link>
        <div><p>button placeholder (Link/image)</p></div>
    </div>
  )
}
