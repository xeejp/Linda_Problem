import React, { Component } from 'react'
import { connect } from 'react-redux'

import CircularProgress from 'material-ui/CircularProgress'

const mapStateToProps = ({}) => ({
})

class WaitingPage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <p>参加者の登録を待っています。</p>
        <p>この画面のまましばらくお待ちください。</p>
        <div style={{textAlign: "center"}}>
          <CircularProgress />
        </div>
      </div>
    )
  }
}

export default connect()(WaitingPage)
