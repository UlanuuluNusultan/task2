import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ExpenceContextProvider } from './store/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExpenceContextProvider>
      <App />
    </ExpenceContextProvider>
  </React.StrictMode>,
)
