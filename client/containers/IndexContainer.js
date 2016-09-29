import { connect } from 'react-redux'

import Index from '../components/Index'

const mapStateToProps = (state) => {
  return {
    hello: state.hello,
    test: state.test
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
