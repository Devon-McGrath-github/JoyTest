import React from 'react'
import { Link } from 'react-router'
import R from 'ramda'

import Nav from './Nav'

export default (props) => {
  //TODO: lots of boilerplate for images/slow load
  let allImages = props.imageInfo.storedImages
  let next = allImages.nextArrow

  return (
    <div className="IndexContainer">
      <div className="contentContainer">
        <Nav />
        <div className="titleContainer">
          <h3>What is branding?</h3>
        </div>

        <div className="navArrows">
          <Link to='page-1'><img className="nextPage" src={next} /></Link>
        </div>
      </div>
    </div>

  )
}
