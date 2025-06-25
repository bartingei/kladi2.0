import styles from './Home.module.css';
import { Link } from "react-router-dom";
import React,{useState} from 'react'
import Shop from '../Shop/Shop.jsx';  
//import About from '../About/About.jsx';
import Contact from "../Contact/Contact.jsx"
import Cart from '../Cart/Cart.jsx'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaPaperPlane } from "react-icons/fa";


function Home() {

        const [cartItems, setCartItems] = useState([]);
        const [newItem, setNewItem] = useState('');

    
        function handleSelectFilter(){
    
        }
    
        function handleCartItem(event){
    
        }
    



  return (
    <div className="home">
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <h1>KLADI</h1>
          </div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            {
                    //<li><Link to="/about">About us</Link></li>
            }
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>

        </nav>
        
      <div className={styles.welcome}>
        <h1>Welcome to KLADI</h1>
        <p>
            KLADI is a place where you can find unique and affordable second-hand items. <br></br>
            Our mission is to promote sustainability by giving pre-loved items a new life. <br/>
            Whether you're looking for vintage clothing, furniture, or accessories, we have something for everyone.
        </p>
        <Link to="/Shop">
        <button>Shop Now</button>
      </Link>
      </div>

      <div >
        <h2>Featured Items</h2>
      </div>

      <div className={styles.items}>
        
        <div className={styles.item} >
          <img src="/images/vintage jacket.jpg" loading="lazy" alt="Item 1" />
          <h4>Vintage Jacket</h4>
          <p className={styles.pricing}>Ksh.850 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)} >Add to cart</button></p> 
        </div>
        <div className={styles.item}>
            <img src="/images/sneakers(white).jpg" loading="lazy" alt="Pre-owned White Sneakers" />
            <h4>Classic White Sneakers</h4>
            <p className={styles.pricing}>Ksh.1,200 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={styles.item}>
            <img src="/images/graphic-hoodie.jpg" loading="lazy" alt="90s Band Hoodie" />
            <h4>Oversized Graphic Hoodie</h4>
            <p className={styles.pricing}>Ksh.950 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={styles.item}>
            <img src="/images/denim-shorts.jpg" loading="lazy" alt="Vintage Denim Shorts" />
            <h4>Distressed Denim Shorts</h4>
            <p className={styles.pricing}>Ksh.850 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={styles.item}>
            <img src="/images/black-tshirts.jpg" loading="lazy" alt="Basic Black Tees" />
            <h4>Black T-Shirts (3-Pack)</h4>
            <p className={styles.pricing}>Ksh.899 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={styles.item}>
            <img src="/images/track-jacket.jpg" loading="lazy" alt="90s Track Jacket" />
            <h4>Vintage Track Jacket</h4>
            <p className={styles.pricing}>Ksh.799 <button className={styles.addToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={styles.item}>
            <div className={styles.toMore}>
              <img src="/images/store.avif" loading="lazy" alt="90s Track Jacket" />
            <h4>View More</h4>
            <p className={styles.pricing}><Link to="/Shop"><button className={styles.shopBtn}>Shop</button></Link></p>
            </div>
        </div>
        
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
                            <li><a href="#home" className={styles.link}>Home</a></li>
                            <li><a href="#shop" className={styles.link}>Shop</a></li>
                            <li><a href="#about" className={styles.link}>About Us</a></li>
                            <li><a href="#reviews" className={styles.link}>Reviews</a></li>
                            <li><Link to="/src/LandingPage/LandingPage.jsx" className={styles.lnk}> Logout</Link></li>
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
                                <input type="email" placeholder="Your email" className={styles.emailInput} />
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

export default Home;