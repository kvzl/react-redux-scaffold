import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

class App extends React.Component {
  render() {
    const { app, actions } = this.props;
    return (
      <div>
        <h1>It Works!</h1>
        <button onClick={ actions.init }>test</button>
        <p>state: </p>
        {
          JSON.stringify(app, null, 4)
        }
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
