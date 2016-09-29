import React from 'react'
import { Link } from 'react-router'
import R from 'ramda'


export default (props) => {
  let allImages = props.imageInfo.storedImages
  let next = allImages.nextArrow

  return (
    <div className="IndexContainer">
      <div className="content">
        <div className="menu">
          <p>replace with menu img</p>
        </div>

        <h3 className="title-mid">What is branding?</h3>

        <Link to='page-1'><img src={next} /></Link>
      </div>
    </div>

  )
}
