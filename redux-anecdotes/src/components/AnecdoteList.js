import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, vote }) => {
  return(
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </div>
  )
}

export default function AnecdoteList(props) {
  // const anecdotes = useSelector(({ anecs }) => anecs.sort((a, b) => b.votes - a.votes))
  // NOTE: ERR: Cannot assign to read only property '0' of object '[object Array]'
  const anecdotes = useSelector(({ anecs, filter }) => {
    // const _anecs = [...anecs]
    const _anecs = [...anecs].filter(o => o.content.includes(filter))
    return _anecs.sort((a, b) => b.votes - a.votes)
  })
  
  const dispatch = useDispatch()

  const vote = async (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(anecdote.content))
    setTimeout(() => {
      dispatch(removeNotification(anecdote.content))
    }, 5000)
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote} />
      )}
    </>
  )
}
