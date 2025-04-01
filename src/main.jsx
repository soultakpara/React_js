import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Login from './components/Login.jsx'
import Defis1 from './components/Defis1'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
      {<Defis1 />}

  </StrictMode>,
)
