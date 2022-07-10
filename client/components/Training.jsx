import React, { useState, useEffect } from 'react'

import { getTraining } from '../apis/training'

export function Training() {
  const [trainingData, setTrainingData] = useState([])

  useEffect(() => {
    return getTraining()
      .then((res) => {
        setTrainingData(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  console.log(trainingData)

  return (
    <div>
      <h1>Training with DGRS</h1>
      <p>
        Everyone is welcome to join in with any of the training sessions
        organised by the club. We usually split into several groups based on
        ability.
      </p>
      {trainingData.map((training, index) => {
        return (
          <div key={index}>
            <p>{training.day}</p>

            <input type="button" />
          </div>
        )
      })}
    </div>
  )
}
