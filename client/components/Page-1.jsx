import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  let allImages = props.imageInfo.storedImages
  let next = allImages.nextArrow
  let prev = allImages.previousArrow

  let megaPhone = allImages.megaPhone

  return (
    <div className="pagesContainer">
      <div className="content">
        <div className="menu">
          <p>MENU button</p>
        </div>

        <h2>Putting it all together</h2>

        <div>
          <p>Now you know a bit about your audience, and the different media channels you can use to reach them. So what are you going to say to them?</p>
          <img src={megaPhone} />
        </div>

        <div><p>previous page button placeholder</p></div>

        <Link to='/'><img src={prev} /></Link>
        <div className="statusBar"><p className="placeholder-statusBar">----------------</p></div>
        <Link to='page-2'><img src={next} /></Link>
      </div>
    </div>
  )
}
