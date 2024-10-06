import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../view/App.jsx'
import { AuthProvider } from './authorization/AuthProvider.jsx'
import { Provider } from 'react-redux'
import store from "../src/app/Store.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>

)
