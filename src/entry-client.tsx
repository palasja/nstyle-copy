import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

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
