import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const NotificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return initialState
    },
  },
})

export const { setNotification, removeNotification } = NotificationSlice.actions

export const throwNotification = (content, time) => {
  return async dispatch => {
    dispatch(setNotification(content))
    setTimeout(() => {
      dispatch(removeNotification(content))
    }, time*1000)
  }
}

export default NotificationSlice.reducer