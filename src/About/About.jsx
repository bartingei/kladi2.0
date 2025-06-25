import {Link} from 'react-router-dom'
import style from './About.module.css'
import Home from '../Home/Home.jsx';
import Shop from '../Shop/Shop.jsx';
import Contact from "../Contact/Contact.jsx"
import Cart from '../Cart/Cart.jsx'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaPaperPlane } from "react-icons/fa";

function About(){
    return(
        <>
         <div className={style.aboutBody}>
             <nav className={style.navbar}>
          <div className={style.logo}>
            <h1>KLADI</h1>
          </div>
          <ul>
            <li><Link to="/home" >Home</Link></li>
            <li><Link to="/shop" >Shop</Link></li>
            <li><Link to="/about" >About us</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/cart" >Cart</Link></li>
        </ul>

        </nav>

            <div className={style.welcome}>
                <h1>KLADI</h1>
                <h2 >Our Story</h2>
                <p >KLADI was founded on the principle that, exceptional style should be built on uncompromising quality. We believe true luxury lies in craftsmanship, premium materials, and timeless design.</p>
                <p >Each KLADI garment is meticulously crafted from the finest fabrics, with attention to every detail. Our designers blend contemporary aesthetics with classic tailoring to create pieces that endure beyond seasonal trends.</p>
                <p >When you choose KLADI, you're investing in more than just clothing - you're embracing a standard of excellence that elevates your everyday experience. Our pieces are designed to become the foundation of a sophisticated, enduring wardrobe.</p>
            </div>
            <div className="reviewHead">
                <h2>What our customers say</h2>
            </div>
            <div className={style.reviews}>
                
                <div className={style.review}>
                    <div className={style.imgText}>
                        <img src="/src/assets/person1.avif" alt="" className={style.personImage} />
                        <p> <span>Fred M.</span><br></br><small>⭐⭐⭐⭐⭐</small></p>
                    </div>
                    <p>"I found the most amazing vintage denim jacket! The quality is incredible and it arrived perfectly cleaned and packaged. Will definitely shop here again!"</p>
                </div>                

                <div className={style.review}>
                    <div className={style.imgText}>
                        <img src="/src/assets/person2.avif" alt="" className={style.personImage} />
                        <p> <span>Jane D.</span><br></br><small>⭐⭐⭐⭐⭐</small></p>
                    </div>
                    <p>"The leather jacket I purchased looks even better in person than in the photos. Customer service was excellent when I had questions about care instructions. Highly recommend!"</p>
                </div>

                <div className={style.review}>
                    <div className={style.imgText}>
                        <img src="/src/assets/person3.avif" alt="" className={style.personImage} />
                        <p> <span>Michael S.</span><br></br><small>⭐⭐⭐⭐⭐</small></p>
                    </div>
                    <p>"The quality of the items is outstanding. I purchased a vintage leather bag and it's become my favorite accessory. Thank you, KLADI!"</p>
                </div>

                <div className={style.review}>
                    <div className={style.imgText}>
                        <img src="/src/assets/person4.avif" alt="" className={style.personImage} />
                        <p> <span>Sarah L.</span><br></br><small>⭐⭐⭐⭐⭐</small></p>
                    </div>
                    <p>"I love the concept of second-hand shopping, and KLADI does it so well. The items are always in great condition and the prices are unbeatable!"</p>
                </div>
            </div>

            <div className={style.missioncont}>
                <div className={style.mission}>
                    <h3>Our Mission</h3>
                    <p>To empower self-expression through bold, sustainable fashion that speaks without words.</p>
                    <br/>
                    <h3>Our Vision: </h3>
                    <p>To become a leading force in urban fashion, known for creativity, sustainability, and authenticity worldwide.</p>
                    
                </div>
            </div>

 

        <div className="store">
            {
                /**<h2>Visit Our Store</h2>
            <p>We are located at:</p>
            <p><strong>123 Fashion Street, Nairobi, Kenya</strong></p>
            <p>Come explore our latest collections and find your unique style!</p> */
            }
            <div className={style.gallery}>
                <h1>Gallery</h1>
                <div className={style.images}>
                    <img src="/src/assets/store4.avif" alt="Store Image 4" />
                    <img src="/src/assets/store.avif" alt="Store Image 1" />
                    <img src="/src/assets/store2.avif" alt="Store Image 2" />
                    <img src="/src/assets/store3.avif" alt="Store Image 3" />
                    <img src="/src/assets/store5.avif" alt="Store Image 5" />
                    <img src="/src/assets/store6.avif" alt="Store Image 6" />
                    <img src="/src/assets/store7.avif" alt="Store Image 7" />
                    <img src="/src/assets/store8.avif" alt="Store Image 8" />
                    <img src="/src/assets/store9.avif" alt="Store Image 9" />
                    <img src="/src/assets/store10.avif" alt="Store Image 10" />
                    <img src="/src/assets/store11.avif" alt="Store Image 11" />
                    <img src="/src/assets/store12.avif" alt="Store Image 12" />
                    <img src="/src/assets/store13.avif" alt="Store Image 13" />
                    <img src="/src/assets/store14.avif" alt="Store Image 14" />
                    <img src="/src/assets/store15.avif" alt="Store Image 15" />
                    <img src="/src/assets/store16.avif" alt="Store Image 16" />
                    <img src="/src/assets/store17.avif" alt="Store Image 17" />
                    <img src="/src/assets/store18.avif" alt="Store Image 18" />
                    <img src="/src/assets/store19.avif" alt="Store Image 19" />
                    <img src="/src/assets/store20.avif" alt="Store Image 20" />

                </div>
            </div>

            <div className={style.achievements}>
                
                <div className={style.achievementItems}>
                    
                    <ul className={style.statsList}>
                        <li><h2><span>500+</span><div className={style.statLabel}>satisfied customers</div></h2></li>
                        <li><h2><span>1200+</span><div className={style.statLabel}>Items sold</div></h2></li>
                        <li><h2><span>2+</span><div className={style.statLabel}>years</div></h2></li>
                        <li><h2><span>2000+</span><div className={style.statLabel}>5⭐ reviews</div></h2></li>
                        <li><h2><span>8000+</span><div className={style.statLabel}>items stocked</div></h2></li>
                        <li><h2><span>70%</span><div className={style.statLabel}>customer return rate</div></h2></li>
                    </ul>                    
                </div>              
                
            </div>

            <div className={style.teamContainer}>
                <h1>Meet Our Team</h1>
                <div className={style.team}>
                    <div className={style.teamMember}>
                        <div className={style.topArrange}>
                            <img src="/src/assets/team1.avif" alt="Team Member 1" />
                            <h2>Jane Doe <br /><strong>Founder & CEO</strong></h2>
                            
                        </div>
                                <p>“Fashion is not just what you wear, it’s how you express who you are.”</p>
                    </div>
                    <div className={style.teamMember}>

                        <div className={style.topArrange}>
                            <img src="/src/assets/team2.avif" alt="Team Member 2" />
                            <h2>John Smith <br/><strong>Creative Director</strong></h2>
                            
                        </div>

                        <p>“Wearing KLADI, you’re making a statement: bold, unapologetic, and fully you.”</p>
                    </div>

                    <div className={style.teamMember}>
                        <div className={style.topArrange}>
                            <img src="/src/assets/team3.avif" alt="Team Member 3" />
                            <h2>Alice Johnson <br /><strong>Head of Design</strong></h2>                        
                        </div>
                        <p>“From concept to your closet — we make sure KLADI delivers the vibe, every time.”</p>
                    </div>

                    <div className={style.teamMember}>
                        <div className={style.topArrange}>
                            <img src="/src/assets/team4.avif" alt="Team Member 4" />
                            <h2>Brianna Jules <br /><strong>Operations Manager</strong></h2>                        
                        </div>
                        <p>“Every piece we drop has meaning. We design for the streets, the moments, the mindset.”</p>
                    </div>
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
                    <a href="#" className={style.link}><FaFacebookF /></a>
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
         </div>
        </>
    );
}

export default About;