import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Question from './Question'
class QuestionDetails extends React.Component {
  render() {
    const { questions, authedUser, users, match } = this.props
    const question = questions[match.params.id]
    let isAnswered = false
    if (question) {
      question.avatarURL = users[question.author].avatarURL
      question.currentUser = authedUser
      isAnswered =
        question.optionOne.votes.includes(authedUser) ||
        question.optionTwo.votes.includes(authedUser)
    }
    return (
      <div className="container">
        {!question ? (
          this.props.history.push('/404')
        ) : (
          <Question question={question} isAnswered={isAnswered} />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions,
  users,
})

export default withRouter(connect(mapStateToProps)(QuestionDetails))
