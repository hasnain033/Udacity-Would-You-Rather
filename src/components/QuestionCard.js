import React from 'react'
import { Button, Card, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const QuestionCard = (props) => {
  return (
    <Card variant="outlined" className="mb-3 mr-2">
      <Card.Body>
        <Row>
          <Col lg="auto" md="auto" sm={12}>
            <Image
              src={props.avatarURL}
              style={{
                maxWidth: '100px',
                borderRadius: '10px',
              }}
            />
          </Col>
          <Col lg="auto" md="auto" sm={12}>
            <Row>{props.name} asks would you rather ...</Row>
            <Row>
              <h6 style={{ color: '#64748B' }}>{props.optionOneText}</h6>
            </Row>
            ---------------------------------- Or
            -----------------------------------
            {/* <Row>
              <h6>{props.optionTwoText}</h6>
            </Row> */}
          </Col>
          <Col className="m-auto text-right col-lg col-md col-sm-12">
            <Link to={`/questions/${props.id}`}>
              <Button style={{ width: 'unset' }}>
                {props.isAnswered ? 'View' : 'Vote'}
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
export default QuestionCard
