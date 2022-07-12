export const REQUEST_TRAINING_DATA = 'REQUEST_TRAINING_DATA'
export const RECEIVE_TRAINING_DATA = 'RECEIVE_TRAINING_DATA'
export const SHOW_ERROR = 'SHOW_ERROR'

import { getTraining } from '../apis/training'

// function requestTrainingData() {
//   return {
//     type: REQUEST_TRAINING_DATA,
//   }
// }

function receiveTrainingData(data) {
  return {
    type: RECEIVE_TRAINING_DATA,
    payload: data,
  }
}

function showError(errormessage) {
  return {
    type: SHOW_ERROR,
    payload: errormessage,
  }
}

export function fetchTrainingData() {
  return (dispatch) => {
    return getTraining()
      .then((response) => {
        dispatch(receiveTrainingData(response))
      })
      .catch((error) => {
        showError(error.message)
      })
  }
}
