import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const NotificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return `You voted '${action.payload}'`
    },
    removeNotification(state, action) {
      return initialState
    },
  },
})

export const { setNotification, removeNotification } = NotificationSlice.actions
export default NotificationSlice.reducer