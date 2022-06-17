import { useDispatch } from 'react-redux'
import React from 'react'
import { createAnec } from '../reducers/anecdoteReducer'

export default function AnecdoteForm(props) {
  const dispatch = useDispatch()

  const handleAddAnec = (e) => {
    e.preventDefault()
    const content = e.target.anec.value
    e.target.anec.value = ''

    dispatch(createAnec(content))
  }

  return (
    <form onSubmit={handleAddAnec}>
      <div><input name="anec" /></div>
      <button type="submit">create</button>
    </form>
  )
}