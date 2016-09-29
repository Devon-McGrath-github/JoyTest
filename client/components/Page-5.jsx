import React from 'react'
import { Link } from 'react-router'

import Nav from './Nav'

export default (props) => {
  //TODO: lots of boilerplate for images/slow load
  let allImages = props.imageInfo.storedImages

  // bottom page sub nav bar
  let next = allImages.nextArrow
  let prev = allImages.previousArrow

  return (
    <div className="pagesContainer">
      <div className="contentContainer">
        <Nav />

        <h2>Whats this section about?</h2>

        <div className="content-box">
          <p>
            In this bit we'll take a look at the following questions:
          </p>
          <ul>
            {/* image can be added in css with list-style-image property */}
            <li>What is branding?</li>
            <li>Whats the difference between branding and marketing?</li>
            <li>What impacts do brands have on companies and their customers?</li>
          </ul>

        </div>

        <Link to='page-4'><img src={prev} /></Link>
        <div className="statusBar"><p className="placeholder-statusBar">----------------</p></div>
        <Link to='page-5'><img src={next} /></Link>
      </div>
    </div>
  )
}
