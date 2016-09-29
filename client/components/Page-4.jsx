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

        <h2>Do you have a brand you identify with?</h2>

        <div className="content">
          <p>
            Is there a particular brand that appeals to you? Think
            car brand, mobile brand, phone brand, clothing brand
            cosmetics brand etc.
          </p>

          <p>------- input field -----</p>

          <p>
            What is it about this brand that stands out or makes you like it?
          </p>

          <p>------- input field -----</p>
        </div>

        <Link to='page-3'><img src={prev} /></Link>
        <div className="statusBar"><p className="placeholder-statusBar">----------------</p></div>
        <Link to='page-5'><img src={next} /></Link>
      </div>
    </div>
  )
}
