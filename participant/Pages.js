import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'

const mapStateToProps = ({}) => ({
})

class Pages extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Question />
      </div>
    )
  }
}

export default connect()(Pages)
