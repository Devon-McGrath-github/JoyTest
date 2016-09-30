import { connect } from 'react-redux'

import Index from '../components/Index'

// Containers are relatively empty because I have little in state
// and have not had time to add them for functionality
// (i.e toggles and popups) as they are time consuming

const mapStateToProps = (state) => {
  return {
    imageInfo: state.imageInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps)(Index)
