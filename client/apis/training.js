import request from 'superagent'

const url = '/api/training'

export function getTraining() {
  return request
    .get(url)
    .then((response) => {
      const stringResponse = JSON.parse(response.text)
      return stringResponse
    })
    .catch((error) => {
      console.error(error)
    })
}
