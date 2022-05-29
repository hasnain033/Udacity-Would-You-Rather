import React, { Component } from 'react'
import { Row, Col, Container, Image, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import sortBy from 'sort-by'
import { withRouter } from 'react-router-dom'

class Leaderboard extends Component {
  render() {
    const { leaderboardPayload } = this.props
    return (
      <Container>
        <h1>Leaderboard</h1>
        <Row>
          {leaderboardPayload &&
            leaderboardPayload.map((user) => (
              <div
                key={user.id}
                className="col-lg-4 col-md-4 col-sm-12"
                style={{
                  border: '1px solid cadetblue',
                  boxShadow: '2px 2px cadetblue',
                  margin: '10px',
                  maxWidth: '290px',
                }}
              >
                <Row>
                  <Col sm={12} className="p-0">
                    <Image
                      src={user.avatarURL}
                      style={{
                        width: 'inherit',
                      }}
                    ></Image>
                  </Col>
                  <Col>
                    <h3>{user.name}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    sm={8}
                    style={{
                      borderRight: '1px solid cadetblue',
                    }}
                  >
                    <div>
                      <h6>Questions Created: </h6>
                      {user.questionsCreatedCount}
                    </div>
                    <div>
                      <h6>Questions Answered: </h6>
                      {user.answersCount}
                    </div>
                  </Col>
                  <Col sm={4} className="m-auto">
                    <Button
                      disabled
                      className="rounded-circle"
                      style={{
                        maxWidth: '35px',
                        background: 'cadetblue',
                        border: 'none',
                      }}
                    >
                      {user.score}
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
        </Row>
      </Container>
    )
  }
}
const mapStateToPro = ({ users }) => {
  const leaderboardPayload = Object.values(users)
    .map((user) => ({
      avatarURL: user.avatarURL,
      id: user.id,
      name: user.name,
      answersCount: Object.values(user.answers).length,
      questionsCreatedCount: user.questions.length,
      score: Object.values(user.answers).length + user.questions.length,
    }))
    .sort(sortBy('-score'))
  return {
    leaderboardPayload,
  }
}

export default withRouter(connect(mapStateToPro)(Leaderboard))
