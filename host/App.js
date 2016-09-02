import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchContents } from './actions'

import PageStepper from './PageStepper'
import Users from './Users'
import Participants from './Participants'
import QuestionEditor from './QuestionEditor'

import Chart from './Chart'

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
        <Participants />
        <Users />
        <Chart />
        <QuestionEditor />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
