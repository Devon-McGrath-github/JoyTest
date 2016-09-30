import React from 'react'
import { Link } from 'react-router'

import Nav from './Nav'

export default (props) => {
  //TODO: lots of boilerplate for images/slow load
  let allImages = props.imageInfo.storedImages

  // bottom page sub nav bar
  let next = allImages.nextArrow
  let prev = allImages.previousArrow

  let megaPhone = allImages.megaPhone

  // page nav logic beginning
  var pageNumber = 0

  return (
    <div className="pagesContainer">
      <div className="contentContainer">
        <Nav />

        <div className="title">
          <h2>Putting it all together</h2>
        </div>

        {/* main content block */}
        {/* could include title if desired */}
        <div className="content">
          <p>
          Now you know a bit about your audience, and the different media
           channels you can use to reach them. So what are you going to say
            to them?
          </p>

          {/* TODO: style image, so its mobile friendly (sized with % media queries) */}
          <img className="megaPhone" src={megaPhone} />
        </div>

        {/* -- can seperate navigation into a seperate component -- */}
        {/* add some logic so next page button onClick page number +1 */}
        {/* vice versa, seperate it into a component, reduce repitiion */}
        {/* also if pageNumber = 0, return "/" else ..... */}
        <div className="navArrows">
          <Link to='/'><img className="prevPage" src={prev} /></Link>
          <Link to='page-2'><img className="nextPage" src={next} /></Link>
        </div>
      </div>
    </div>
  )
}
