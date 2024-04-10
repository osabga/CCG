import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RestorePassword from './pages/RestorePassword'
import AddQuestion from './pages/AddQuestion'

function App() {

  return (
    <div className = "App">
      <Router>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/Signup' element={ <Signup/> }/>
            <Route path='/Login' element={ <Login/> }/>
            <Route path='/RestorePassword' element={ <RestorePassword/> }/>
            <Route path='/AddQuestion' element={ <AddQuestion/> }/>
          </Routes>
        </Router>
    </div>
  )
}
export default App
