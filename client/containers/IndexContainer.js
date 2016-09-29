import { connect } from 'react-redux'

import Index from '../components/Index'

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
