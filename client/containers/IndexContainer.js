import { connect } from 'react-redux'

import Index from '../components/Index'

const mapStateToProps = (state) => {
  console.log('state index container ', state);
  return {
    hello: state.hello,
    test: state.test,
    nextPage: state.nextPage,
    imageInfo: state.imageInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps)(Index)
