import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server';
import App from './App'

export function render() {
  
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
          <StaticRouter location={'/'}>
        {/* <Provider store={store}> */}
          <App />
        {/* </Provider> */}
    </StaticRouter>

    </React.StrictMode>
  )
  return { html }
}

export default render;