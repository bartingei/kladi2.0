import {Link} from 'react-router-dom'
import style from './Contact.module.css'
import Home from '../Home/Home.jsx';
import Shop from '../Shop/Shop.jsx';
//import About from '../About/About.jsx'
import Cart from '../Cart/Cart.jsx'
import React, {useState} from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaPaperPlane } from "react-icons/fa";


function Contact(){

    const [message, setMessage] = useState('');
    function messageDelivered(){
        window.alert('your message has been successfully sent');
    }
    function handleInput(event){
        setMessage(event.target.value)
        useState('')
    }

    return(
        <>
        <div className={style.contactBody}>
            <nav className={style.navbar}>
            <div className={style.logo}>
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
        <div className={style.contactFormContainer}>
            <h2>We will be glad to hear from you</h2>

        <div className={style.formContact}>
            <form action="#" className={style.contactForm}>
                
                <p><label htmlFor="name">Name: 
                    <input type="text" required id="name"  />
                </label></p>

                <p><label htmlFor="Email">Email: 
                    <input type="Email" required id="Email"  />
                </label></p>
                
                <p><label htmlFor="subject">Subject: 
                    <select name="options" id="options">
                        <option value="">Choose subject</option>
                        <option value="Support">📞Support</option>
                        <option value="Order Inquiry">🛍️Order Inquiry</option>
                        <option value="Shipping & Delivery">📦Shipping & Delivery</option>
                        <option value="Returns & Exchanges">🔄Returns & Exchanges</option>
                        <option value="Payment & Billing">💳Payment & Billing</option>
                        <option value="Product Questions">🧵 Product Questions</option>
                        <option value="Collaboration">👥 Business Inquiry / Collaboration</option>
                        <option value="Technical Support">🛠️ Technical Support</option>
                        <option value="Suggestions">📣 Feedback / Suggestions</option>
                        <option value="Other">❓ Other</option>
                    </select>
                 </label></p>

                <p><textArea placeholder="Your message goes here" onChange={(event) => handleInput(event)}></textArea></p>
                <p><button type='submit' 
                onClick={messageDelivered}
                className={style.contactBtn}>
                    Send
                </button></p>
            </form>
        </div>       

        </div>

        <footer className={style.footer}>
            <div className={style.container}>
            <div className={style.grid}>
            <div>
                <h3 className={style.title}>Kladi</h3>
                <p className={style.text}>Kladi yako, furaha yetu</p>
            </div>
            <div>
                <h3 className={style.title}>Quick Links</h3>
                <ul className={style.links}>
                <li><a href="#home" className={style.link}>Home</a></li>
                <li><a href="#shop" className={style.link}>Shop</a></li>
                <li><a href="#about" className={style.link}>About Us</a></li>
                <li><a href="#reviews" className={style.link}>Reviews</a></li>
                <li><Link to="/src/LandingPage/LandingPage.jsx" className={style.lnk}> Logout</Link></li>
                </ul>
            </div>
            <div>
                <h3 className={style.title}>Customer Service</h3>
                <ul className={style.links}>
                <li><a href="#" className={style.link}>Contact Us</a></li>
                <li><a href="#" className={style.link}>FAQs</a></li>
                <li><a href="#" className={style.link}>Shipping Policy</a></li>
                <li><a href="#" className={style.link}>Returns & Exchanges</a></li>
                </ul>
            </div>
            <div>
                <h3 className={style.title}>Connect With Us</h3>
                <div className={style.socials}>
                <></><a href="#" className={style.link}><FaFacebookF /></a>
                <a href="#" className={style.link}><FaTwitter /></a>
                <a href="#" className={style.link}><FaInstagram /></a>
                <a href="#" className={style.link}><FaPinterest /></a>
                </div>
                <div className={style.subscribe}>
                <p className={style.text}>Subscribe to our newsletter</p>
                <div className={style.subscribeForm}>
                    <input type="email" placeholder="Your email" className={style.emailInput} />
                    <button className={style.sendButton}>
                    <FaPaperPlane />
                    </button>
                </div>
                </div>
            </div>
            </div>
            <div className={style.copyright}>
            <p>&copy; 2025 Kladi. All rights reserved.</p>
            </div>
        </div>
        </footer>
        </div>
        </>
    );
}

export default Contact;