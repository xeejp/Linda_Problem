import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardHeader, CardText } from 'material-ui/Card'

import { getStatus } from 'util/index'

const User = ({ id, status }) => (
  <tr>
    <td>{id}</td>
    <td>{getStatus(status)}</td>
  </tr>
)

const mapStateToProps = ({users}) => ({
  users,
})

const Users = ({ users }) => (
  <Card 
    style={{marginTop: "5%"}}
  >
    <CardHeader
      title="参加者"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>状態</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(users).map(id => (
                users[id].status != "noactive"
                ? <User
                key={id}
                id={id}
                status={users[id].status}
                />
                : null
            )).reverse()
          }
        </tbody>
      </table>
    </CardText>
  </Card>
)

export default connect(mapStateToProps)(Users)
