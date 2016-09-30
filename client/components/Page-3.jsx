import React from 'react'
import { Link } from 'react-router'

import Nav from './Nav'

export default (props) => {
  //TODO: lots of boilerplate for images/slow load
  let allImages = props.imageInfo.storedImages

  // bottom page sub nav bar
  let next = allImages.nextArrow
  let prev = allImages.previousArrow

  let logos = allImages.logos

  return (
    <div className="pagesContainer">
      <div className="contentContainer">
        <Nav />

        <div className="title">
          <h2>Unless you grew up on Mars</h2>
        </div>

        <div className="content">
          <p>
            ...Then you've probably interacted with at least one or two
            brands in your life! (if you did grow up on Mars, then welcome
            to Earth and try the pineapple lumps...they're delicious!)
          </p>
          <img className="logo" src={logos} />

          {/*TODO: popup information */}
          <div className="yes-noContainer">
            <button>yes</button>
            <button>no</button>
          </div>
        </div>

        <div className="navArrows">
          <Link to='page-2'><img className="prevPage" src={prev} /></Link>
          <Link to='page-4'><img className="nextPage" src={next} /></Link>
        </div>
      </div>
    </div>
  )
}
