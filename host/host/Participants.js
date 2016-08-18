import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({users}) => ({
  users,
})

class Participant extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    const {users} = this.props
    return (
      <div>
        <p>現在{Object.keys(users).length}人参加しています。</p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Participant)
