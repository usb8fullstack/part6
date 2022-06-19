import React from 'react'
// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  // const dispatch = useDispatch()

  const handleAddAnec = async (e) => {
    e.preventDefault()
    const content = e.target.anec.value
    e.target.anec.value = ''

    // dispatch(createAnecdote(content))
    props.createAnecdote(content)
  }

  return (
    <form onSubmit={handleAddAnec}>
      <div><input name="anec" /></div>
      <button type="submit">create</button>
    </form>
  )
}

// export default AnecdoteForm
export default connect(
  null, 
  { createAnecdote }
)(AnecdoteForm)