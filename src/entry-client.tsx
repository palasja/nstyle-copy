import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Eyebrows from './pages/eyebrows'

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
      <BrowserRouter>
{/* <Provider store={store}> */}
  <App />
{/* </Provider> */}
</BrowserRouter>
</React.StrictMode>
)
