import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import App from './App'
import Home from './routes/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
	<Route path="/" element={<App />}>
	    <Route path="/" element={<Home />}/>
	</Route>
    </Routes>
  </BrowserRouter>
)
