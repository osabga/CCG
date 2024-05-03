import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RestorePassword from './pages/RestorePassword'
import AddQuestion from './pages/AddQuestion.tsx'
import EditQuestions from './pages/EditQuestions.tsx'
import ChatPage from './pages/ChatPage.tsx'
import FrequentlyQuestions from './pages/FrequentlyQuestions.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Example from './pages/Example.tsx'

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
            <Route path='/EditQuestion' element={ <EditQuestions/> }/>
            <Route path='/ChatPage' element={ <ChatPage/> }/>
            <Route path='/FrequentlyQuestions' element={ <FrequentlyQuestions/> }/>
            <Route path='/Dashboard' element={ <Dashboard/> }/>

            
            <Route path='/Faqs' element={ <Faqs/> }/>
            <Route path='/example' element={ <Example/> }/>
          </Routes>
        </Router>
    </div>
  )
}
export default App
