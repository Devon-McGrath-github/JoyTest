import React from 'react'
import { Link } from 'react-router'
import R from 'ramda'

import Nav from './Nav'

export default (props) => {
  //TODO: lots of boilerplate for images/slow load
  let allImages = props.imageInfo.storedImages
  let next = allImages.nextArrow

  return (
    <div className="indexContainer">
      {/* above div allows comments here, does nothing else */}
      {/* container that holds all content on the page, required for redux */}
      <div className="contentContainer">
        {/* imported Nav component */}
        <Nav />

        <div className="mainHeading">
          <h3>What is branding?</h3>
        </div>

        {/* main navigation buttons */}
        <div className="navArrows">
          <Link to='page-1'><img className="nextPage" src={next} /></Link>
        </div>
      </div>
    </div>
  )
}
