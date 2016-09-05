import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views'
import IconButton from 'material-ui/IconButton'
import ImageEdit from 'material-ui/svg-icons/image/edit'
import ImageAdd from 'material-ui/svg-icons/content/add';
import ImageDelete from 'material-ui/svg-icons/action/delete';
import FlatButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

import { updateQuestion } from './actions'

const mapStateToProps = ({ question, page }) => ({
  question, page
})

class QuestionEditor extends Component {
  constructor(props){
    super(props)
    const { question } = this.props
    this.state = {
      question: question,
      isOpenDialog: false,
      default_text: {
        text: "リンダは31歳です。独身です。\n社交的でとても陽気な性格です。彼女は哲学を専攻しました。\n学生時代には、差別や社会的正義について深い関心をもち、反原発運動にも参加していました。\n次の各項目の順序を、最もあり得るものを1番目に、最もあり得ないものを8番目に来るように並び替えてください。",
        answers: [
          { id: 0, text: "リンダは小学校の教師をしている",},
          { id: 1, text: "リンダは本屋で働いており、ヨガの教室に通っている",},
          { id: 2, text: "リンダはフェミニスト活動家である",},
          { id: 3, text: "リンダは精神病院で働いている",},
          { id: 4, text: "リンダは「女性有権者の会」の会員である",},
          { id: 5, text: "リンダは銀行の窓口係である",},
          { id: 6, text: "リンダは保険外交員である",},
          { id: 7, text: "リンダは銀行の窓口係で、フェミニスト活動家である",},
        ]
      }
    }
  }

  handleOpen() {
    this.setState({ 
      isOpenDialog: true,
      question: this.props.question,
    })
  }

  handleClose() {
    this.setState({ isOpenDialog: false })
  }

  handleChange(value, event){
    var question = Object.assign({}, this.state.question)
    var temp = question
    for(var i = 0; i < value.length - 1; i++){
      temp = temp[value[i]]
    }
    temp[value[value.length - 1]] = event.target.value
    this.setState({ question: question })
  }

  handleSlide(value) {
    this.setState({
      slideIndex: value
    })
  }

  deleteAnswer(index) {
    var {question} = this.state
    question.answers.splice(index, 1)
    this.setState({
      question: question,
    })
  }

  addAnswer() {
    var {question} = this.state
    var id = 0
    var flag = false
    while (!flag) {
      for (var i = 0; i < question.answers.length; i++) {
        if (question.answers[i].id == id) {
          id++
          break
        } else if (i >= question.answers.length-1) {
          flag = true
        }
      }
    }
    question.answers.push({id: id, text: ""})
    this.setState({
      question: question,
    })
  }

  submit() {
    const { dispatch } = this.props
    dispatch(updateQuestion(this.state.question))
    this.setState({ isOpenDialog: false })
  }

  reset(){
    const { dispatch } = this.props
    dispatch(updateQuestion(this.state.default_text))
    this.setState({ question: this.state.default_text, isOpenDialog: false})
  }

  render(){
    const { page } = this.props
    const actions = [
      <FlatButton
        label="適用"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.submit.bind(this)}
      />,
      <FlatButton
        label="キャンセル"
        onTouchTap={this.handleClose.bind(this)}
      />,
     <FlatButton
        label="すべてリセット"
        onTouchTap={this.reset.bind(this)}
      />,
    ]
    return (<div>
      <FloatingActionButton 
        onClick={this.handleOpen.bind(this)} 
        disabled={page != "waiting"}
      >
         <ImageEdit />
      </FloatingActionButton>
      <Dialog
        title="問題編集画面"
        actions={actions}
        modal={false}
        open={this.state.isOpenDialog}
        autoScrollBodyContent={true}
      >
        <p>問題文</p>
        <TextField
          hintText={"問題の説明"}
          defaultValue={this.state.question.text}
          onBlur={this.handleChange.bind(this, ["text"])}
          multiLine={true}
          fullWidth={true}
        />
        <p>選択肢</p>
        <table>
          <tbody>
            {
              this.state.question.answers.map((answer, index) => (
                <tr key={answer.id}>
                  <td>
                    <FloatingActionButton 
                      mini={true} 
                      secondary={true}
                      onTouchTap={this.deleteAnswer.bind(this, index)}
                    >
                      <ImageDelete />
                    </FloatingActionButton>
                  </td>
                  <td>
                    <TextField
                      hintText={"選択肢"}
                      defaultValue={answer.text}
                      onBlur={this.handleChange.bind(this, ["answers", index, "text"])}
                      multiLine={false}
                      fullWidth={true}
                    />
                  </td>
                </tr>
              ))
            }
            <tr>
              <td>
                <FloatingActionButton 
                  mini={true}
                  onTouchTap={this.addAnswer.bind(this)}
                >
                  <ImageAdd />
                </FloatingActionButton>
              </td>
            </tr>
          </tbody>
        </table>
      </Dialog>
    </div>)
  }
}

export default connect(mapStateToProps)(QuestionEditor)
