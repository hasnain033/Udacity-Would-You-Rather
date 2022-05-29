import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { handleSaveQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    stOption: '',
    ndOption: '',
  }

  handleOnChange = (e) => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleSaveQuestion = (e) => {
    e.preventDefault()
    const { stOption, ndOption } = this.state
    const { authedUser, handleSaveQuestion, history } = this.props
    handleSaveQuestion({
      optionOneText: stOption,
      optionTwoText: ndOption,
      author: authedUser,
    })

    history.push('/')
  }

  render() {
    const { stOption, ndOption } = this.state
    return (
      <div className="container">
        <h1>Would you rather</h1>
        <div className="form-group">
          <label htmlFor="stOption">1st Option</label>
          <input
            type="text"
            id="stOption"
            className="form-control form-control-md"
            value={stOption}
            onChange={(event) => this.handleOnChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ndOption">2nd Option</label>
          <input
            type="text"
            id="ndOption"
            className="form-control form-control-md"
            value={ndOption}
            onChange={(event) => this.handleOnChange(event)}
          />
        </div>
        <Button
          type="submit"
          disabled={!stOption || !ndOption}
          onClick={this.handleSaveQuestion}
        >
          Add Question
        </Button>
      </div>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => ({ users, authedUser })

export default withRouter(
  connect(mapStateToProps, { handleSaveQuestion })(NewQuestion)
)
