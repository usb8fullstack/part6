import { createSlice } from '@reduxjs/toolkit'
import anecService from '../services/anecs'

const AnecSlice = createSlice({
  name: 'anecs',
  initialState: [],
  reducers: {
    createAnec(state, action) {
      state.push(action.payload)
    },
    voteAnec(state, action) {
      const changedAnec = action.payload
      return state.map(o =>
        o.id !== changedAnec.id ? o : changedAnec 
      )
    },
    setAnecs(state, action) {
      return action.payload
    }
  },
})

export const { createAnec, voteAnec, appendAnec, setAnecs } = AnecSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecs = await anecService.getAll()
    dispatch(setAnecs(anecs))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newObj = await anecService.createNew(content)
    dispatch(createAnec(newObj))
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const _anecdote = {...anecdote}
    _anecdote.votes += 1
    const changedObj = await anecService.update(_anecdote, _anecdote.id)
    dispatch(voteAnec(changedObj))
  }
}

export default AnecSlice.reducer