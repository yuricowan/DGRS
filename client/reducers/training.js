import { RECEIVE_TRAINING_DATA, DEL_TRAINING_DATA } from '../actions/training'

export function trainingInfo(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_TRAINING_DATA:
      return payload
    case DEL_TRAINING_DATA:
      return state.filter((element) => element.day != payload.day)
    default:
      return state
  }
}
