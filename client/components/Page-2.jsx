import React from 'react'
import { Link } from 'react-router'

export default (props) => {

  return (
    <div className="pagesContainer">
      <div className="content">
        <div className="menu">
          <p>replace with menu img</p>
        </div>

        <h3 className="title-mid">Measuring Effectiveness Depends on the method</h3>

        <p>Digital or print, campaign or not - the actual things you're measuring will depend on your communication strategy. Tap each topic below to learn more</p>

        <p className="instructions">Tap each topic to learn more</p>
        <Link to='page-1'><p>Previous</p></Link>
        <Link to='page-2'><p>Next Page</p></Link>

      </div>
    </div>

  )
}
