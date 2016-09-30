import React from 'react'

export default (props) => (
  <div id="app-view">
    {/* this loads all 'children' aka the other pages */}
    {props.children}
  </div>
)
