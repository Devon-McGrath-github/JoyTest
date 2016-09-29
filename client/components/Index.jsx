import React from 'react'
import { Link } from 'react-router'

console.log('hello');
// console.log(typeof(state.images));


export default (props) => {

  console.log('nextPage value ', props.nextPage);
  return (
    <div className="IndexContainer">
      <div className="content">
        <div className="menu">
          <p>replace with menu img</p>
        </div>

        <h3 className="title-mid">What is branding?</h3>

        <p>hello {}</p>

        <Link to='page-1'><p>Next Page</p></Link>
        <div className="nextPage"></div>
      </div>
    </div>

  )
}
