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

// **** UPDATE FUNCTION MISSING PATCH URL ****
export function updateTraining(trainingInfo) {
  return request
    .patch()
    .send(trainingInfo)
    .then((response) => {
      console.log(`API patch: ${response.body}`)
    })
    .catch((err) => {
      console.error(err)
    })
}
// **** UPDATE FUNCTION MISSING PATCH URL ****

export function deleteTraining(day) {
  return request
    .delete(url + `/delete`)
    .send(day)
    .then((res) => {
      return res.status
    })
    .catch((err) => {
      console.error(err)
    })
}
