import React from 'react'
import { Link } from 'react-router'

import Nav from './Nav'

export default (props) => {
  //TODO: lots of boilerplate for images/slow load
  const allImages = props.imageInfo.storedImages

  // bottom page sub nav bar
  const next = allImages.nextArrow
  const prev = allImages.previousArrow

  // Pink Buttons
  const buttonUnticked = allImages.buttonUnticked
  const buttonTicked = allImages.buttonTicked

  return (
    <div className="pagesContainer">
      <div className="contentContainer">
        <Nav />

        <h3 className="title">Measuring Effectiveness Depends on the method</h3>

        <div className="content">
          <p>Digital or print, campaign or not - the actual things you're measuring will depend on your communication strategy. Tap each topic below to learn more</p>

          {/* TODO: allow images to be toggled, make them buttons */}
          <img src={buttonUnticked}/>
          <img src={buttonUnticked}/>
          <img src={buttonUnticked}/>

        </div>



        <p className="instructions">Tap each topic to learn more</p>
        <Link to='page-1'><img src={prev} /></Link>
        <div className="statusBar"><p className="placeholder-statusBar">----------------</p></div>
        <Link to='page-2'><img src={next} /></Link>

      </div>
    </div>
  )
}
