import LandingPage from './LandingPage/LandingPage'
import React , {useState} from 'react'
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'
import Homepage from './Home/Home';
import Shop from './Shop/Shop';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If exists, increase quantity
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If new item, add to cart with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to remove items from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };

  // Function to update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return(
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp setIsAuth={setIsAuthenticated} />} />

        {/* Protected Routes (only after login) */}
        <Route 
          path="/home" 
          element={isAuthenticated ? <Homepage cartItems={cartItems} addToCart={addToCart} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/shop" 
          element={isAuthenticated ? <Shop cartItems={cartItems} addToCart={addToCart} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/contact" 
          element={isAuthenticated ? <Contact /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/cart" 
          element={isAuthenticated ? <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} /> : <Navigate to="/login" />} 
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;