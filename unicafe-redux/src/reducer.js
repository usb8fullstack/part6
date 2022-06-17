const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  const _state = {...state}
  switch (action.type) {
    case 'GOOD':
      _state.good += 1
      return _state
    case 'OK':
      _state.ok += 1
      return _state
    case 'BAD':
      _state.bad += 1
    return _state
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer