import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Moviecontext from './context/Moviecontext.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Favmoviecontext from './context/favmoviecontext.jsx'

createRoot(document.getElementById('root')).render(
  <Moviecontext>
    <Favmoviecontext>
      <HashRouter >
        <App />
      </HashRouter>
    </Favmoviecontext>
  </Moviecontext>

)
