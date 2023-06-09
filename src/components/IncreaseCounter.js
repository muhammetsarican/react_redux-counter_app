import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {increaseCounter} from "../redux/actions/counterActions"

class IncreaseCounter extends Component {
  render() {
    return (
      <button onClick={e=>{
        this.props.dispatch(increaseCounter());
      }}>
        Increase 1
      </button>
    )
  }
}

function mapDispatchToProps(dispatch){
 return {actions:bindActionCreators(increaseCounter, dispatch)};
}

export default connect(mapDispatchToProps)(IncreaseCounter);