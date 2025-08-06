import { useState } from 'react';
import styles from './Cart.module.css';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaPaperPlane, FaTrash } from "react-icons/fa";

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [error, setError] = useState('');

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  const handleCheckout = async () => {
    if (!phoneNumber) {
      setError('Please enter your M-Pesa phone number');
      return;
    }

    // Validate Kenyan phone number format (07XXXXXXXX or +2547XXXXXXXX)
    if (!/^(\+254|0)[17]\d{8}$/.test(phoneNumber)) {
      setError('Please enter a valid M-Pesa phone number (format: 07XXXXXXXX or +2547XXXXXXXX)');
      return;
    }

    setIsCheckingOut(true);
    setError('');

    try {
      // Simulate API call to your backend that would initiate M-Pesa payment
      const response = await simulateMpesaPayment(phoneNumber, totalPrice);
      
      if (response.success) {
        setCheckoutSuccess(true);
        // Here you would typically clear the cart after successful payment
      } else {
        setError(response.message || 'Payment failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during payment processing.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  const simulateMpesaPayment = (phone, amount) => {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        // In a real app, this would be an actual API call to your backend
        // which would then call Safaricom's M-Pesa API
        console.log(`Initiating M-Pesa payment of Ksh.${amount} to ${phone}`);
        
        // Simulate successful payment 80% of the time
        const success = Math.random() > 0.2;
        
        if (success) {
          resolve({
            success: true,
            message: 'Payment initiated successfully. Please check your phone to complete the payment.'
          });
        } else {
          resolve({
            success: false,
            message: 'Payment request failed. Please ensure you have sufficient funds and try again.'
          });
        }
      }, 2000);
    });
  };

  const formatPhoneNumber = (input) => {
    // Convert 07 to +254 for consistency
    if (input.startsWith('07') && input.length === 10) {
      return `+254${input.substring(1)}`;
    }
    return input;
  };

  if (checkoutSuccess) {
    return (
      <div className={styles.cartPage}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <h1>KLADI</h1>
          </div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart" className={styles.cartLink}>
              Cart {cartItems.length > 0 && <span>({cartItems.length})</span>}
            </Link></li>
          </ul>
        </nav>
        
        <div className={styles.checkoutSuccess}>
          <h2>Payment Initiated Successfully!</h2>
          <p>Please check your phone to complete the M-Pesa payment.</p>
          <p>A confirmation message will be sent to {phoneNumber}.</p>
          <Link to="/home" className={styles.continueBtn}>
            Back to Home
          </Link>
        </div>
        
        <footer className={styles.footer}>
          {/* ... existing footer code ... */}
        </footer>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>KLADI</h1>
        </div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart" className={styles.cartLink}>
            Cart {cartItems.length > 0 && <span>({cartItems.length})</span>}
          </Link></li>
        </ul>
      </nav>

      <div className={styles.cartContainer}>
        <h1 className={styles.cartHeader}>Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <p>Your cart is empty</p>
            <Link to="/shop" className={styles.continueBtn}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className={styles.cartContent}>
            <div className={styles.cartItems}>
              {cartItems.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImageContainer}>
                    <img src={item.image} alt={item.name} className={styles.itemImage} />
                  </div>
                  <div className={styles.itemDetails}>
                    <h3>{item.name}</h3>
                    <p>Ksh. {item.price.toLocaleString()}</p>
                    
                    <div className={styles.quantityControl}>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className={styles.removeBtn}
                    >
                      <FaTrash /> Remove
                    </button>
                  </div>
                  <div className={styles.itemTotal}>
                    Ksh. {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cartSummary}>
              <h2>Order Summary</h2>
              <div className={styles.summaryRow}>
                <span>Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                <span>Ksh. {totalPrice.toLocaleString()}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Estimated Tax</span>
                <span>Ksh. 0</span>
              </div>
              <div className={styles.totalRow}>
                <span>Total</span>
                <span>Ksh. {totalPrice.toLocaleString()}</span>
              </div>
              
              {/* M-Pesa Payment Section */}
              <div className={styles.mpesaSection}>
                <h3>M-Pesa Payment</h3>
                <div className={styles.phoneInput}>
                  <label htmlFor="mpesa-phone">Phone Number:</label>
                  <input
                    type="tel"
                    id="mpesa-phone"
                    placeholder="07XXXXXXXX or +2547XXXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={styles.phoneField}
                  />
                </div>
                {error && <p className={styles.errorText}>{error}</p>}
              </div>
              
              <button 
                onClick={handleCheckout}
                className={styles.checkoutBtn}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
              </button>
              
              <Link to="/shop" className={styles.continueBtn}>
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.title}>Kladi</h3>
              <p className={styles.text}>Kladi yako, furaha yetu</p>
            </div>
            <div>
              <h3 className={styles.title}>Quick Links</h3>
              <ul className={styles.links}>
                <li><Link to="/home" className={styles.link}>Home</Link></li>
                <li><Link to="/shop" className={styles.link}>Shop</Link></li>
                <li><Link to="/contact" className={styles.link}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className={styles.title}>Customer Service</h3>
              <ul className={styles.links}>
                <li><a href="#" className={styles.link}>Contact Us</a></li>
                <li><a href="#" className={styles.link}>FAQs</a></li>
                <li><a href="#" className={styles.link}>Shipping Policy</a></li>
                <li><a href="#" className={styles.link}>Returns & Exchanges</a></li>
              </ul>
            </div>
            <div>
              <h3 className={styles.title}>Connect With Us</h3>
              <div className={styles.socials}>
                <a href="#" className={styles.link}><FaFacebookF /></a>
                <a href="#" className={styles.link}><FaTwitter /></a>
                <a href="#" className={styles.link}><FaInstagram /></a>
                <a href="#" className={styles.link}><FaPinterest /></a>
              </div>
              <div className={styles.subscribe}>
                <p className={styles.text}>Subscribe to our newsletter</p>
                <div className={styles.subscribeForm}>
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className={styles.emailInput} 
                  />
                  <button className={styles.sendButton}>
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; 2025 Kladi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Cart;