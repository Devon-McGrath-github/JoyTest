import { connect } from 'react-redux'

import PersonalitiesIndex from '../components/PersonalitiesIndex'


const mapStateToProps = (state) => {
  return {
    things: state.things,
    placeholder: state.placholder
  }
}
// images: state.images,
// nextPage: state.nextPage

const mapDispatchToProps = (dispatch) => {
  return {
    addThing: (e) => {
      e.preventDefault()
      dispatch(addThing())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalitiesIndex)
