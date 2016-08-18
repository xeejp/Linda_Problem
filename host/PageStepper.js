import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Step, Stepper, StepButton} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'

import { changePage } from './actions'

import { getPage } from 'util/index'

const pages = ["waiting", "experiment", "result"]

const mapStateToProps = ({page}) => ({
  page,
})

class PageStepper extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  nextPage() {
    const { page } = this.props
    if (page == "waiting") {
      this.changePage("experiment")
    } else {
      this.changePage("result")
    }
  }

  backPage() {
    console.log("backPage")
    const { page } = this.props
    if (page == "result") {
      this.changePage("experiment")
    } else {
      this.changePage("waiting")
    }
  }

  changePage(page) {
    const { dispatch } = this.props
    dispatch(changePage(page))
  }

  render() {
    const { page } = this.props
    const steps = []
    for (let i = 0; i < pages.length; i++) {
      steps[i] = (
        <Step key={i}>
          <StepButton onClick={this.changePage.bind(this, pages[i])}>
            {getPage(pages[i])}
          </StepButton>
        </Step>
      )
    }
    return (
      <div>
        <Stepper activeStep={pages.indexOf(page)} linear={false}>
          {steps}
        </Stepper>
        {pages.indexOf(page) == 0
          ? <RaisedButton label="戻る" disabled={true} />
          : <RaisedButton label="戻る" onClick={this.backPage.bind(this)} />}
          {pages.indexOf(page) == pages.length-1
            ? <RaisedButton label="次へ" primary={true} disabled={true} />
            : <RaisedButton label="次へ" primary={true} onClick={this.nextPage.bind(this)} />}
          </div>
    )
  }
}

export default connect(mapStateToProps)(PageStepper)
