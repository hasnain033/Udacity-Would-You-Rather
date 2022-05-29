import { SET_AUTHED_USER } from '.'

export function setAuthedUser(userId) {
  return {
    type: SET_AUTHED_USER,
    data: { userId },
  }
}
