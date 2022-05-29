import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from './App'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StyledEngineProvider } from '@mui/material/styles'

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StyledEngineProvider>,
  document.getElementById('root')
)
