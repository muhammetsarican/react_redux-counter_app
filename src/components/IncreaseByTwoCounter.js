import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter } from "../redux/actions/counterActions"

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <button onClick={e => {
        this.props.dispatch(increaseByTwoCounter());
      }}>
        Increase 2
      </button>)
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);