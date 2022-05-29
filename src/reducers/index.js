import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import authedUser from './authed-user'

const rootReducer = combineReducers({
  questions,
  users,
  authedUser
})

export default rootReducer
