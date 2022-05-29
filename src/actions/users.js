import { RECEIVE_USERS, USER_ADDED_QUESTION, USER_ANSWERED_QUESTION, ADD_USER } from '.'
import { saveUser } from '../utils/api'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    data: { users },
  }
}

export function userAddedQuestion({ authedUser, qid }) {
  return { type: USER_ADDED_QUESTION, data: { authedUser, qid } }
}

export function userAnsweredQuestion({ authedUser, qid, answer }) {
  return { type: USER_ANSWERED_QUESTION, data: { answer, qid, authedUser } }
}

export function Register(user) {
  return { type: ADD_USER, data: { user } }
}

export function handleRegisteration({ username, name, avatarURL }) {
  return (dispatch) => {
    return saveUser({ username, name, avatarURL }).then(
      (user) => {
        dispatch(Register(user))
      }
    )
  }
}