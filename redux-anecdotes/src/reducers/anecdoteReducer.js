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
      const id = action.payload
      const anecToChange = state.find(n => n.id === id)
      const changedAnec = { 
        ...anecToChange, 
        votes: anecToChange.votes + 1
      }
      return state.map(o =>
        o.id !== id ? o : changedAnec 
      )
    },
    appendAnec(state, action) {
      state.push(action.payload)
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

export default AnecSlice.reducer