import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Inspector from 'react-json-inspector'

class App extends React.Component {
  render() {
    const { app, actions } = this.props;
    return (
      <div>
        <h1>It Works!</h1>
      </div>
    )
  }
}

function mapState(state) {
  return {
    app: state.app
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapState, mapDispatch)(App)
