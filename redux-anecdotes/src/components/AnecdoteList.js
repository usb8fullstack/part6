import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnec } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, vote }) => {
  return(
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  )
}

export default function AnecdoteList(props) {
  // const anecdotes = useSelector(({ anecs }) => anecs.sort((a, b) => b.votes - a.votes))
  // NOTE: ERR: Cannot assign to read only property '0' of object '[object Array]'
  const anecdotes = useSelector(({ anecs }) => {
    const _anecs = [...anecs]
    return _anecs.sort((a, b) => b.votes - a.votes)
  })
  
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnec(id))
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote} />
      )}
    </>
  )
}
