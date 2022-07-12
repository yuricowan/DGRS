import { RECEIVE_TRAINING_DATA } from '../actions/training'

export function trainingInfo(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_TRAINING_DATA:
      return payload
    default:
      return state
  }
}
