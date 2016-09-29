import React from 'react'
import { Link } from 'react-router'
import R from 'ramda'


export default (props) => {
  let nextPageImage = props.imageInfo.nextPage

  console.log('');
  console.log('props', props.imageInfo);
  console.log(props.imageInfo.string);

  return (
    <div className="IndexContainer">
      <div className="content">
        <div className="menu">
          <p>replace with menu img</p>
        </div>

        <h3 className="title-mid">What is branding?</h3>

        <Link to='page-1'><img src={nextPageImage} /></Link>
      </div>
    </div>

  )
}
