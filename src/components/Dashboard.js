import React, { Component } from 'react'
import { connect } from 'react-redux'
import sortBy from 'sort-by'
import QuestionCard from './QuestionCard'
import { withRouter } from 'react-router-dom'
import { Row, Col, Container, Tab, Nav } from 'react-bootstrap'

class Dashboard extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props
    return (
      <Container>
        <h1>Dashboard</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col lg="auto" md="auto" sm={12}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    Unanswered Questions ({unansweredQuestions.length})
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Answered Questions ({answeredQuestions.length})
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {unansweredQuestions &&
                    unansweredQuestions.map((question) => (
                      <QuestionCard {...question} key={question.id} />
                    ))}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {answeredQuestions &&
                    answeredQuestions.map((question) => (
                      <QuestionCard {...question} key={question.id} />
                    ))}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  const answeredQuestions = Object.values(questions)
    .filter(
      (question) =>
        question.optionOne.votes.includes(authedUser) ||
        question.optionTwo.votes.includes(authedUser)
    )
    .map((question) => ({
      name: question.author,
      id: question.id,
      optionOneText: question.optionOne.text,
      optionTwoText: question.optionTwo.text,
      timestamp: question.timestamp,
      avatarURL: users[question.author].avatarURL,
      isAnswered: true,
    }))
    .sort(sortBy('-timestamp'))

  const unansweredQuestions = Object.values(questions)
    .filter(
      (question) =>
        !question.optionOne.votes.includes(authedUser) &&
        !question.optionTwo.votes.includes(authedUser)
    )
    .map((question) => ({
      name: question.author,
      id: question.id,
      optionOneText: question.optionOne.text,
      optionTwoText: question.optionTwo.text,
      timestamp: question.timestamp,
      avatarURL: users[question.author].avatarURL,
      isAnswered: false,
    }))
    .sort(sortBy('-timestamp'))
  return {
    answeredQuestions,
    unansweredQuestions,
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard))
