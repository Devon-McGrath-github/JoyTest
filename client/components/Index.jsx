import React from 'react'
import { Link } from 'react-router'
import R from 'ramda'

console.log('Index.jsx page loaded log');
// console.log(this.state.imageInfo);
// console.log(typeof(state.images));


export default (props) => {
  console.log('');
  console.log('props log', props);
  console.log('image info log', props.imageInfo);
  let info = R.values(props.imageInfo)
  console.log('info log', info);
  // console.log(tester);
  console.log('hello value ', info.hello);
  // console.log('test value ', props.test);
  // console.log('nextPage value ', props.nextPage);

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