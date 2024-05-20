import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RestorePassword from './pages/RestorePassword'
import AddQuestion from './pages/AddQuestion.tsx'
import EditQuestions from './pages/EditQuestions.tsx'
import ChatPage from './pages/ChatPage.tsx'
import FrequentlyQuestions from './pages/FrequentlyQuestions.tsx'
import Services from './pages/Services.tsx'
import Products from './pages/Products.tsx'
import Dashboard from './pages/Dashboard.tsx'


function App() {

  return (
    <div className = "App" >
      <Router>
          <Routes>
          <Route path='/' element={ <Home/> }/>
            <Route path='/Signup' element={ <Signup/> }/>
            <Route path='/Login' element={ <Login/> }/>
            <Route path='/RestorePassword' element={ <RestorePassword/> }/>
            <Route path='/AddQuestion' element={ <AddQuestion/> }/>
            <Route path='/EditQuestion' element={ <EditQuestions/> }/>
            <Route path='/ChatPage' element={ <ChatPage/> }/>
            <Route path='/FrequentlyQuestions' element={ <FrequentlyQuestions/> }/>
            <Route path='/Dashboard' element={ <Dashboard/> }/>
            <Route path='/Services' element={ <Services/> }/>
            <Route path='/Products' element={ <Products/> }/>
          </Routes>
        </Router>
    </div>
  )
}
export default App
