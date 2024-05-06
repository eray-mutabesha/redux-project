import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// redux
import { Provider } from 'react-redux'    
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/Index.jsx'
import { getPosts } from './action/Action.post.jsx'
import { getPost } from './action/User.action.jsx'


const store=configureStore({
  reducer:rootReducer,
  devTools:true,
})
store.dispatch(getPosts())
store.dispatch(getPost())
ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
   <App/>
 </Provider> ,
)
