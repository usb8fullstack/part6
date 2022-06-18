import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import AnecReducer from './reducers/anecdoteReducer'
import NotificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

// const store = createStore(AnecReducer)
const store = configureStore({
  reducer: {
    anecs: AnecReducer,
    notification: NotificationReducer,
    filter: filterReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
