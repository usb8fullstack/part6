import { useDispatch } from 'react-redux'
import React from 'react'
import { createAnec } from '../reducers/anecdoteReducer'
import anecService from '../services/anecs'

export default function AnecdoteForm(props) {
  const dispatch = useDispatch()

  const handleAddAnec = async (e) => {
    e.preventDefault()
    const content = e.target.anec.value
    e.target.anec.value = ''

    const newObj = await anecService.createNew(content)
    // dispatch(createAnec(content))
    dispatch(createAnec(newObj))
  }

  return (
    <form onSubmit={handleAddAnec}>
      <div><input name="anec" /></div>
      <button type="submit">create</button>
    </form>
  )
}