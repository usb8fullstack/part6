import { configureStore } from '@reduxjs/toolkit'

import AnecReducer from './reducers/anecdoteReducer'
import NotificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    anecs: AnecReducer,
    notification: NotificationReducer,
    filter: filterReducer,
  }
})

export default store