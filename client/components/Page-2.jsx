import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  let allImages = props.imageInfo.storedImages
  let next = allImages.nextArrow
  let prev = allImages.previousArrow

  return (
    <div className="pagesContainer">
      <div className="content">
        <div className="menu">
          <p>MENU button</p>
        </div>

        <h3 className="title-mid">Measuring Effectiveness Depends on the method</h3>

        <p>Digital or print, campaign or not - the actual things you're measuring will depend on your communication strategy. Tap each topic below to learn more</p>

        <p className="instructions">Tap each topic to learn more</p>
        <Link to='page-1'><img src={prev} /></Link>
        <Link to='page-2'><img src={next} /></Link>

      </div>
    </div>
  )
}
