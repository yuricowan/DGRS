import { SHOW_ERROR } from '../actions/training'

export function errorMessage(state = '', action) {
  const { type, payload } = action

  switch (type) {
    case SHOW_ERROR:
      return payload
    default:
      return state
  }
}
