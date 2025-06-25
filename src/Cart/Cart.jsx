import styles from './Cart.module.css';
import { Link } from "react-router-dom";
import React,{useState} from 'react'
import Home from '../Home/Home.jsx'
import Shop from '../Shop/Shop.jsx';  
//import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaPaperPlane } from "react-icons/fa";

function Cart(){
    return(
        <>
       <div className={styles.cartBody}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <h1>KLADI</h1>
          </div>
          <ul>
            <li><Link to="/Home" element = {<Home/>}>Home</Link></li>
            <li><Link to="/Shop" element = {<Shop/>}>Home</Link></li>
            {
              //<li><Link to="/About"  element = {<About/>}>About us</Link></li>
            }
            <li><Link to="/Contact" element = {<Contact/>}>Contact</Link></li>
            <li><Link to="/Cart" element = {<Cart/>}>Cart</Link></li>
          </ul>

        </nav>
       </div>
        </>
    );
}

export default Cart;