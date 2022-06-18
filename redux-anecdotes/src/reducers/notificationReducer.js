import { createSlice } from '@reduxjs/toolkit'

const initialState = 'hihihaha'

const NotificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
  },
})

// export const { createAnec, voteAnec } = NotificationSlice.actions
export default NotificationSlice.reducer