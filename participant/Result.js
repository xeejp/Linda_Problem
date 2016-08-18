import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchContents } from './actions'

const mapStateToProps = ({page}) => ({
})

class Result extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const { page } = this.props
    return (
      <div>
        <p>実験は終了です</p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Result)
