import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchContents } from './actions'

import PageStepper from './PageStepper'

const mapStateToProps = ({}) => ({
})

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchContents())
  }

  render() {
    return (
      <div>
        <PageStepper />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
