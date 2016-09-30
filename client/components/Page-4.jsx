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

        <div className="title">
          <h2>Do you have a brand you identify with?</h2>
        </div>

        <div className="content">
          <p>
            Is there a particular brand that appeals to you? Think
            car brand, mobile brand, phone brand, clothing brand
            cosmetics brand etc.
          </p>

          <input type="text" placeholder="" />

          <p>
            What is it about this brand that stands out or makes you like it?
          </p>

          <input type="text" placeholder="" />
        </div>

        <div className="navArrows">
          <Link to='page-3'><img className="prevPage" src={prev} /></Link>
          <Link to='page-5'><img className="nextPage" src={next} /></Link>
        </div>
      </div>
    </div>
  )
}
