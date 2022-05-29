import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared'
import Authentication from './components/Authentication'
import Leaderboard from './components/Leaderboard'
import Dashboard from './components/Dashboard'
import PageNotFound from './components/PageNotFound'
import NewQuestion from './components/NewQuestion'
import QuestionDetails from './components/QuestionDetails'
import Switch from 'react-bootstrap/esm/Switch'
import MenuBar from './components/MenuBar'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5f9ea0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
})

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData()
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <div>
            {this.props.authedUser &&
            Object.keys(this.props.authedUser).length ? (
              <div>
                <MenuBar />
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/add" component={NewQuestion} />
                  <Route exact path="/leaderboard" component={Leaderboard} />
                  <Route path="/questions/:id" component={QuestionDetails} />
                  <Route path="/404" component={PageNotFound} />
                </Switch>
              </div>
            ) : (
              <Authentication />
            )}
          </div>
        </Fragment>
      </ThemeProvider>
    )
  }
}
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleInitialData: () => dispatch(handleInitialData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
