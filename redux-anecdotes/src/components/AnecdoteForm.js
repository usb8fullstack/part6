import { useDispatch } from 'react-redux'
import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

export default function AnecdoteForm(props) {
  const dispatch = useDispatch()

  const handleAddAnec = async (e) => {
    e.preventDefault()
    const content = e.target.anec.value
    e.target.anec.value = ''

    dispatch(createAnecdote(content))
  }

  return (
    <form onSubmit={handleAddAnec}>
      <div><input name="anec" /></div>
      <button type="submit">create</button>
    </form>
  )
}