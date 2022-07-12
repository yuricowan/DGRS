import React, { useState, useEffect } from 'react'
import { IconButton, Button } from '@chakra-ui/react'
import { getTraining, deleteTraining } from '../apis/training'
import { useDispatch, useSelector } from 'react-redux'
import { CloseIcon, PlusSquareIcon } from '@chakra-ui/icons'
import { AddTraining } from './AddTraining'
import { fetchTrainingData } from '../actions/training'

export function Training() {
  const dispatch = useDispatch()
  const [trainingData, setTrainingData] = useState([])
  const trainingInfo = useSelector((state) => state.trainingInfo)
  const [formStatus, setFormStatus] = useState(false)

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchTrainingData())
    }
    fetchData()
  }, [])

  function removeTraining(day) {
    return deleteTraining({ day }).then(() => {
      const updatedData = trainingData.filter((element) => element.day != day)
      setTrainingData(updatedData)
    })
  }

  function openForm() {
    setFormStatus(true)
  }

  // check React v.18 is compatible with testing library

  return (
    <div>
      <h1>Training with DGRS</h1>
      <p>
        Everyone is welcome to join in with any of the training sessions
        organised by the club. We usually split into several groups based on
        ability.
      </p>
      <br />
      {trainingInfo.map((training, index) => {
        return (
          <div key={index}>
            <h1>
              <strong>{training.day}</strong>{' '}
            </h1>
            <p>{training.description}</p>
            <p>{training.location}</p>
            <IconButton
              aria-label="Remove training"
              onClick={() => removeTraining(training.day)}
              icon={<CloseIcon />}
            />
          </div>
        )
      })}
      <Button
        aria-label="Add training"
        onClick={() => openForm()}
        icon={<PlusSquareIcon />}
      >
        Add training
      </Button>
      {formStatus ? <AddTraining /> : null}
    </div>
  )
}
