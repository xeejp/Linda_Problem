import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchContents } from './actions'

import Waiting from './Waiting'
import Question from './Question'
import Result from './Result'

const mapStateToProps = ({page}) => ({
  page
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
    const { page } = this.props
    return (
      <div>
        { (page == "waiting") ? <Waiting /> : null }
        { (page == "experiment") ? <Question /> : null }
        { (page == "result") ? <Result /> : null }
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
