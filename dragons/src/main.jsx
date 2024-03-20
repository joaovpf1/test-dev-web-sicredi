import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RoutesMain } from './routes/RoutesMain.jsx'
import { DragonProvider } from './providers/dragonContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DragonProvider>
        <RoutesMain>
          <App/>
        </RoutesMain>
      </DragonProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
