import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({}) => ({
})

class QuestionText extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return <div>
      <p>質問に答えてください。</p>
      <p>リンダは大学でプログラミングを学び首席で卒業しました。</p>
      <p>彼女は菜食主義で環境問題にも造詣が深い女性です。</p>
      <p>彼女はいま社会人として活躍しています。</p>
      <p>リンダは現在何をしているか、次のうちいずれの可能性が高いでしょうか。</p>
      <p>可能性が高いものを選んでください。</p>
    </div>
  }
}

export default connect()(QuestionText)
