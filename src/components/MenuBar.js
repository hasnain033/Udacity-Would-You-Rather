import React from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authed-user'
import { Image, Navbar, Nav } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'

class MenuBar extends React.Component {
  render() {
    const currentUser = this.props.users[this.props.authedUser]
    return (
      <div className="container">
        {currentUser && (
          <Navbar className="pr-0" collapseOnSelect expand="md" variant="light">
            <Navbar.Brand to="/">
              <Image
                src={currentUser.avatarURL}
                style={{
                  width: 'auto',
                  height: 35,
                  marginRight: '30px',
                  borderRadius: '5pc',
                }}
              />
              {currentUser.name}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/add">
                  New Question
                </Link>
                <Link className="nav-link" to="/leaderboard">
                  Leader Board
                </Link>
              </Nav>
              <Nav className="row">
                <button
                  style={{ color: '#dc3545' }}
                  className="btn text-right"
                  onClick={(event) => {
                    event.preventDefault()
                    this.props.setAuthedUser(null)
                  }}
                >
                  <LogoutIcon />
                </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}
      </div>
    )
  }
}
const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
})
const mapDisPatchToProps = (dispatch) => {
  return {
    setAuthedUser: (id) => dispatch(setAuthedUser(id)),
  }
}
export default withRouter(connect(mapStateToProps, mapDisPatchToProps)(MenuBar))
