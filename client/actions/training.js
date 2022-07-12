export const REQUEST_TRAINING_DATA = 'REQUEST_TRAINING_DATA'
export const DEL_TRAINING_DATA = 'DEL_TRAINING_DATA'
export const RECEIVE_TRAINING_DATA = 'RECEIVE_TRAINING_DATA'
export const SHOW_ERROR = 'SHOW_ERROR'

import { getTraining, deleteTraining } from '../apis/training'

function receiveTrainingData(data) {
  return {
    type: RECEIVE_TRAINING_DATA,
    payload: data,
  }
}
// action creater
function showError(errormessage) {
  return {
    type: SHOW_ERROR,
    payload: errormessage,
  }
}

export function delTraining(day) {
  return {
    type: DEL_TRAINING_DATA,
    payload: day,
  }
}

// fancy action i.e thunk is a fancy function
// thunk enables dispatch(functions)
export function fetchTrainingData() {
  // dispatch takes multiple arguments, one where you can access state and do something with it
  return (dispatch) => {
    // thunk from here
    return getTraining()
      .then((response) => {
        dispatch(receiveTrainingData(response))
      })
      .catch((error) => {
        showError(error.message)
      })
  }
}

export function deleteTrainingData(day) {
  return (dispatch) => {
    return deleteTraining(day)
      .then(() => dispatch(delTraining(day)))
      .catch((err) => {
        console.log(err)
      })
  }
}
