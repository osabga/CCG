import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RestorePassword from './pages/RestorePassword'

function App() {

  return (
    <div className = "App">
      <Router>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/Signup' element={ <Signup/> }/>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/RestorePassword' element={ <RestorePassword/> }/>
          </Routes>
        </Router>
    </div>
  )
}
export default App
