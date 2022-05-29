import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authed-user'
import { handleRegisteration } from '../actions/users'
import { Card, Image, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import Login  from './Login'
import Register from './Register'
import FormLabel from '@mui/material/FormLabel'

class Authentication extends Component {
  state = {
     isNewUser: false,
  }
  clickHandler = () => {
    this.setState((prevState) => ({
      isNewUser: !prevState.isNewUser
    }))
  }
  render() {
    const { usersPayload, setAuthedUser, handleRegisteration } = this.props
    const { isNewUser } = this.state
    return (
      <div className="container">
        <div
          className="row"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            className="col-sm-12 col-lg-auto col-md-auto"
            style={{
              boxShadow: '5px 5px cadetblue',
              border: '1px solid',
              padding: '10px',
            }}
          >
            <h1 className="text-center">Would You rather app</h1>
            <Image className="app-logo"/>
            <Row>
              <div style={{
                textAlign:'right'
              }} onClick={this.clickHandler}>
                <FormLabel style={{
                  borderBottom:'1px #64748B solid',
                  color:'#64748B'
                }}> 
                {!isNewUser ? 'Register?' : 'Login?'}
                </FormLabel>
              </div>
            </Row>
            {isNewUser ? <Register users = {usersPayload} setAuthedUser={setAuthedUser} 
            handleRegisteration = {handleRegisteration}/> 
            : <Login usersPayload = {usersPayload} setAuthedUser={setAuthedUser} />}
          </Card>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const usersPayload = Object.values(users).map((user) => ({
    avatarURL: user.avatarURL,
    id: user.id,
    name: user.name,
  }))
  return {
    usersPayload,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: (userId) => dispatch(setAuthedUser(userId)),
    handleRegisteration: (user) => dispatch(handleRegisteration(user))
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Authentication))
