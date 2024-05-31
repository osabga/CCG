import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RestorePassword from './pages/RestorePassword';
import AddQuestion from './pages/AddQuestion';
import EditQuestions from './pages/EditQuestions';
import ChatPage from './pages/ChatPage';
import FrequentlyQuestions from './pages/FrequentlyQuestions';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Products from './pages/Products';
import { FaqProvider } from './components/FaqContext';
import PrivateRoute from '../src/router/UserCheck'

function App() {
  return (
    <div className="App">
      <FaqProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/RestorePassword' element={<RestorePassword />} />
            {<Route path='/AddQuestion' element={<PrivateRoute><AddQuestion /></PrivateRoute>} />}
            {<Route path='/EditQuestions' element={<PrivateRoute><EditQuestions /></PrivateRoute>} />}
            {<Route path='/ChatPage' element={<PrivateRoute><ChatPage /></PrivateRoute>} />}
            <Route path='/FrequentlyQuestions' element={<FrequentlyQuestions />} />
            {<Route path='/Dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />}
            <Route path='/Services' element={<Services />} />
            <Route path='/Products' element={<Products />} />
          </Routes>
        </Router>
      </FaqProvider>
    </div>
  );
}

export default App;
