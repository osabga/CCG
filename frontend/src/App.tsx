import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RestorePassword from './pages/RestorePassword'
<<<<<<< HEAD
import AddQuestion from './pages/AddQuestion'
import EditQuestions from './pages/EditQuestions'
import ChatPage from './pages/ChatPage'
import FrequentlyQuestions from './pages/FrequentlyQuestions'
=======
import Faqs from "./pages/Faqs.tsx";
>>>>>>> 0da1960a4d98b443f786273ad8f51b322b41969e

function App() {

  return (
    <div className = "App">
      <Router>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/Signup' element={ <Signup/> }/>
            <Route path='/Login' element={ <Login/> }/>
            <Route path='/RestorePassword' element={ <RestorePassword/> }/>
<<<<<<< HEAD
            <Route path='/AddQuestion' element={ <AddQuestion/> }/>
            <Route path='/EditQuestion' element={ <EditQuestions/> }/>
            <Route path='/ChatPage' element={ <ChatPage/> }/>
            <Route path='/FrequentlyQuestions' element={ <FrequentlyQuestions/> }/>
=======
              <Route path='/Faqs' element={ <Faqs/> }/>
>>>>>>> 0da1960a4d98b443f786273ad8f51b322b41969e
          </Routes>
        </Router>
    </div>
  )
}
export default App
