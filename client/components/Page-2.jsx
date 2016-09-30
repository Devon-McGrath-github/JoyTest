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
  // TODO: need to add toggle logic


  return (
    <div className="pagesContainer">
      <div className="contentContainer">
        <Nav />

        <div className="title">
          <h2>Measuring Effectiveness Depends on the method</h2>
        </div>

        <div className="content">
          <p>Digital or print, campaign or not - the actual things you're measuring will depend on your communication strategy. Tap each topic below to learn more</p>

          {/* TODO: allow images to be toggled, make them buttons */}
          {/* reduce Z-INDEX of images so text will be ontop */}
          <ul className="topicList">
            <li>
              <div className="liContainer">
                <img className="listButton" src={buttonUnticked}/>
                <div className="text">
                  <p>text</p>
                </div>
              </div>
            </li>
            <li><img src={buttonUnticked}/></li>
            <li><img src={buttonUnticked}/></li>

          </ul>

        </div>

        <div className="instructions">
          <p>Tap each topic to learn more</p>
        </div>

        <div className="navArrows">
          <Link to='page-1'><img className="prevPage" src={prev} /></Link>
          <Link to='page-3'><img className="nextPage" src={next} /></Link>
        </div>
      </div>
    </div>
  )
}
