import { connect } from 'react-redux'

import component from '../components/Page-2'

const mapStateToProps = (state) => {
  return {
    imageInfo: state.imageInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps)(component)