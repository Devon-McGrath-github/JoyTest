import { connect } from 'react-redux'

import Index from '../components/Index'
import { showDetails, addThing } from '../actions'

const mapStateToProps = (state) => {
  return {
    things: state.things
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
