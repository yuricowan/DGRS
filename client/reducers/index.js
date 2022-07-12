import { combineReducers } from 'redux'
import { trainingInfo } from './training'
import { errorMessage } from './errorMessage'

export default combineReducers({
  trainingInfo,
  errorMessage,
})
