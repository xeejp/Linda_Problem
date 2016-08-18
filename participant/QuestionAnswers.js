import React, { Component } from 'react'
import { connect } from 'react-redux'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = ({}) => ({
})

class QuestionAnswers extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {value: null}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, value) {
    this.setState({
      value
    })
  }

  handleClick() {
    
  }

  render() {
    return (
      <div>
        <RadioButtonGroup
          name="shipSpeed"
          onChange={this.handleChange}
        >
          <RadioButton
            value="1"
            label="プログラマ"
          />
          <RadioButton
            value="2"
            label="銀行員"
          />
          <RadioButton
            value="3"
            label="プログラマで環境保護活動家"
          />
        </RadioButtonGroup>
        {
          this.state.value != null
          ? <RaisedButton
              label="送信"
              primary={true}
              onClick={this.handleClick}
            />
            : null
        }
      </div>
    )
  }
}

export default connect()(QuestionAnswers)
