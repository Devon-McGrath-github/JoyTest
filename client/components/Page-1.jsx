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

        <h2>Putting it all together</h2>

        <div className="content">
          <p>Now you know a bit about your audience, and the different media channels you can use to reach them. So what are you going to say to them?</p>
          <img src={megaPhone} />
        </div>

        <div><p>previous page button placeholder</p></div>

          {/* -- can seperate navigation into a seperate component -- */}
          {/* add some logic so next page button onClick page number +1 */}
          {/* vice versa, seperate it into a component, reduce repitiion */}
          {/* also if pageNumber = 0, return "/" else ..... */}
        <Link to='/'><img src={prev} /></Link>
        <div className="statusBar"><p className="placeholder-statusBar">----------------</p></div>
        <Link to='page-2'><img src={next} /></Link>
      </div>
    </div>
  )
}
