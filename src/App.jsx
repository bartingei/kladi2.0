import LandingPage from './LandingPage/LandingPage'
import React , {useState} from 'react'
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'
import Homepage from './Home/Home';
import Shop from './Shop/Shop';
import About from './About/About';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

function App() {

   const [isAuthenticated, setIsAuthenticated] = useState(false);

  return(
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp setIsAuth={setIsAuthenticated} />} />

        {/* Protected Routes (only after login) */}
  <Route path="/home" element={isAuthenticated ? <Homepage /> : <Navigate to="/login" />} />
  <Route path="/shop" element={isAuthenticated ? <Shop /> : <Navigate to="/login" />} />
  <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
  <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/login" />} />
  <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />

  <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App