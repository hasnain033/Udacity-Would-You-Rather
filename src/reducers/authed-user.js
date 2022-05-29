import { SET_AUTHED_USER } from '../actions'

export default function authedUserReducer(state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      const { userId } = action.data
      return userId
    default:
      return state
  }
}
