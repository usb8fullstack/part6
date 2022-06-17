const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)
  switch(action.type) {
    case 'CREATE_ANEC':
      return [...state, action.data]
    case 'VOTE_ANEC':
      const id = action.data.id
      const anecToChange = state.find(n => n.id === id)
      const changedAnec = { 
        ...anecToChange, 
        votes: anecToChange.votes + 1
      }
      return state.map(o =>
        o.id !== id ? o : changedAnec 
      )
    default:
      return state
  }
}

export const createAnec = (content) => {
  return {
    type: 'CREATE_ANEC',
    data: {
      content,
      id: getId(),
      votes: 0
    }
  }
}

export const voteAnec = (id) => {
  return {
    type: 'VOTE_ANEC',
    data: { id }
  }
}

export default reducer