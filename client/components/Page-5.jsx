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
      {/* TODO: choose better className */}
      {/* div name changed for unique page styling */}
      <div className="page5-Content-Container">
        <Nav />

        <div className="title">
          <h2>What's this section about?</h2>
        </div>

        <div className="content-box">
          <p>
            In this bit we'll take a look at the following questions:
          </p>
          <ul className="page5-list">
            {/* image can be added in css with list-style-image property */}
            <li>What is branding?</li>
            <li>Whats the difference between branding and marketing?</li>
            <li>What impacts do brands have on companies and their customers?</li>
          </ul>

        </div>

        <div className="navArrows">
          {/* in the example there is no previous arrow */}
          <Link to='page-5'><img className="nextPage" src={next} /></Link>
        </div>
      </div>
    </div>
  )
}
