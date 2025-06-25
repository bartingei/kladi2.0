import style from './Shop.module.css'
import { Link } from "react-router-dom";
import React, {useState} from 'react';
import Home from '../Home/Home.jsx';
//import About from '../About/About.jsx';
import Contact from "../Contact/Contact.jsx"
import Cart from '../Cart/Cart.jsx'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaPaperPlane } from "react-icons/fa";


function Shop() {
    const [cartItems, setCartItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    

    function handleSelectFilter(){

    }

    function handleCartItem(event){

    }

  return (
    <div className={style.shop}>
        <nav className={style.navbar}>
          <div className={style.logo}>
            <h1>KLADI</h1>
          </div>
          <ul>
            <li><Link to="/home" >Home</Link></li>
            <li><Link to="/shop" >Shop</Link></li>
            {
                    //<li><Link to="/about">About us</Link></li>
                }
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/cart" >Cart</Link></li>
          </ul>

        </nav>
        
      <div className={style.welcome}>
        <h1>KLADI</h1>
        <p> Streetwear Essentials, Unmatched Vibes </p>
      </div>
      <div className={style.featureHead}>
        <h2>Featured Items</h2>
      </div>
      <div className={style.items}>
        
        <div className={style.item}>
          <img src="/images/vintage jacket.jpg" loading="lazy" alt="Item 1" />
          <h4>Vintage Jacket</h4>
          <p className={style.pricing}>Ksh.850 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p> 
        </div>
        <div className={style.item}>
            <img src="/images/sneakers(white).jpg" loading="lazy" alt="White Sneakers" />
            <h4>Classic White Sneakers</h4>
            <p className={style.pricing}>Ksh.1,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={style.item}>
            <img src="/images/graphic-hoodie.jpg" loading="lazy" alt="90s Band Hoodie" />
            <h4>Oversized Graphic Hoodie</h4>
            <p className={style.pricing}>Ksh.950 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={style.item}>
            <img src="/images/denim-shorts.jpg" loading="lazy" alt="Vintage Denim Shorts" />
            <h4>Denim Shorts</h4>
            <p className={style.pricing}>Ksh.850 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={style.item}>
            <img src="/images/black-tshirts.jpg" loading="lazy" alt="Basic Black Tees" />
            <h4>Black T-Shirts (3-Pack)</h4>
            <p className={style.pricing}>Ksh.899 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>
        <div className={style.item}>
            <img src="/images/track-jacket.jpg" loading="lazy" alt="90s Track Jacket" />
            <h4>Vintage Track Jacket</h4>
            <p className={style.pricing}>Ksh.799 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
            
        </div>
      </div>

      <div className={style.allProducts}>
        <h2>All Products</h2>
        
        {
            /**<select name="#"
         id="#" 
         onChange={handleSelectFilter}
         className={style.selectFilter}>
            <option value="#">Filter</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            
        </select> */
        }

      </div>
      <div className={style.items}>

        <div className={style.item}>
            <img src="/images/track-jacket.jpg" loading="lazy" alt="90s Track Jacket" />
            <h4>Vintage Track Jacket</h4>
            <p className={style.pricing}>Ksh.1,300 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/denim-jacket.jpg" loading="lazy" alt="Classic Denim Jacket" />
            <h4>Classic Denim Jacket</h4>
            <p className={style.pricing}>Ksh.2,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)} >Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/ripped-jeans.jpg" loading="lazy" alt="Ripped Jeans" />
            <h4>High-Waist Ripped Jeans</h4>
            <p className={style.pricing}>Ksh.1,800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/oversized-hoodie.jpg" loading="lazy" alt="Oversized Hoodie" />
            <h4>Oversized Hoodie</h4>
            <p className={style.pricing}>Ksh.1,600 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/linen-shirt.jpg" loading="lazy" alt="Linen Shirt" />
            <h4>Linen Button-Up Shirt</h4>
            <p className={style.pricing}>Ksh.1,400 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/leather-bag.jpg" loading="lazy" alt="Leather Crossbody Bag" />
            <h4>Leather Crossbody Bag</h4>
            <p className={style.pricing}>Ksh.2,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/air-max.jpg" loading="lazy" alt="Nike Air Max" />
            <h4>Nike Air Max Sneakers</h4>
            <p className={style.pricing}>Ksh.5,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/crop-top.jpg" loading="lazy" alt="Crop Top" />
            <h4>Basic Cotton Crop Top</h4>
            <p className={style.pricing}>Ksh.900 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/chino-pants.jpg" loading="lazy" alt="Chino Pants" />
            <h4>Slim-Fit Chino Pants</h4>
            <p className={style.pricing}>Ksh.2,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
          <img src="/images/vintage jacket.jpg" loading="lazy" alt="Item 1" />
          <h4>Vintage Jacket</h4>
          <p className={style.pricing}>Ksh.850 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p> 
        </div>

        <div className={style.item}>
            <img src="/images/sneakers(white).jpg" loading="lazy" alt="Pre-owned White Sneakers" />
            <h4>Classic White Sneakers</h4>
            <p className={style.pricing}>Ksh.1,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/graphic-hoodie.jpg" loading="lazy" alt="90s Band Hoodie" />
            <h4>Oversized Graphic Hoodie</h4>
            <p className={style.pricing}>Ksh.950 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/denim-shorts.jpg" loading="lazy" alt="Vintage Denim Shorts" />
            <h4>Denim Shorts</h4>
            <p className={style.pricing}>Ksh.850 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/black-tshirts.jpg" loading="lazy" alt="Basic Black Tees" />
            <h4>Black T-Shirts (3-Pack)</h4>
            <p className={style.pricing}>Ksh.899 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/images/bomber-jacket.jpg" loading="lazy" alt="Bomber Jacket" />
            <h4>Classic Bomber Jacket</h4>
            <p className={style.pricing}>Ksh.3,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/slides.jpg" loading="lazy" alt="Slides" />
            <h4>Casual Slides</h4>
            <p className={style.pricing}>Ksh.1,100 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/printed-tee.jpg" loading="lazy" alt="Printed T-Shirt" />
            <h4>Graphic Print T-Shirt</h4>
            <p className={style.pricing}>Ksh.1,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/ankle-boots.jpg" loading="lazy" alt="Ankle Boots" />
            <h4>Women's Ankle Boots</h4>
            <p className={style.pricing}>Ksh.3,800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/joggers.jpg" loading="lazy" alt="Joggers" />
            <h4>Men's Jogger Pants</h4>
            <p className={style.pricing}>Ksh.1,700 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/sun-hat.jpg" loading="lazy" alt="Sun Hat" />
            <h4>Wide-Brim Sun Hat</h4>
            <p className={style.pricing}>Ksh.1,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/leather-belt.jpg" loading="lazy" alt="Leather Belt" />
            <h4>Genuine Leather Belt</h4>
            <p className={style.pricing}>Ksh.1,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/formal-shoes.jpg" loading="lazy" alt="Formal Shoes" />
            <h4>Men's Formal Shoes</h4>
            <p className={style.pricing}>Ksh.4,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/images/turtleneck.jpg" loading="lazy" alt="Turtleneck" />
            <h4>Wool Turtleneck Sweater</h4>
            <p className={style.pricing}>Ksh.2,100 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/images/windbreaker.jpg" loading="lazy" alt="Windbreaker" />
            <h4>Lightweight Windbreaker</h4>
            <p className={style.pricing}>Ksh.2,400 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/pleated-skirt.jpg" loading="lazy" alt="Pleated Skirt" />
            <h4>Women's Pleated Skirt</h4>
            <p className={style.pricing}>Ksh.1,600 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/cargo-pants.jpg" loading="lazy" alt="Cargo Pants" />
            <h4>Men's Cargo Pants</h4>
            <p className={style.pricing}>Ksh.2,300 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/beanie.jpg" loading="lazy" alt="Beanie" />
            <h4>Knit Beanie Hat</h4>
            <p className={style.pricing}>Ksh.800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/flannel-shirt.jpg" loading="lazy" alt="Flannel Shirt" />
            <h4>Checked Flannel Shirt</h4>
            <p className={style.pricing}>Ksh.1,900 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/loafers.jpg" loading="lazy" alt="Loafers" />
            <h4>Casual Leather Loafers</h4>
            <p className={style.pricing}>Ksh.3,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/athleisure-set.jpg" loading="lazy" alt="Athleisure Set" />
            <h4>Matching Athleisure Set</h4>
            <p className={style.pricing}>Ksh.2,700 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/puffer-jacket.jpg" loading="lazy" alt="Puffer Jacket" />
            <h4>Winter Puffer Jacket</h4>
            <p className={style.pricing}>Ksh.4,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/sunglasses.jpg" loading="lazy" alt="Sunglasses" />
            <h4>Aviator Sunglasses</h4>
            <p className={style.pricing}>Ksh.1,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/chelsea-boots.jpg" loading="lazy" alt="Chelsea Boots" />
            <h4>Women's Chelsea Boots</h4>
            <p className={style.pricing}>Ksh.3,600 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/sport-shoes.jpg" loading="lazy" alt="Men's Running Shoes" />
            <h4>Men's Running Shoes</h4>
            <p className={style.pricing}>Ksh.2,300 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/polo-shirt.jpg" loading="lazy" alt="Men's Polo Shirt" />
            <h4>Men's Polo Shirt</h4>
            <p className={style.pricing}>Ksh.1,800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/formal-pants.jpg" loading="lazy" alt="Formal Pants" />
            <h4>Men's Formal Pants</h4>
            <p className={style.pricing}>Ksh.2,700 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/images/womens-heels.jpg" loading="lazy" alt="Women's High Heels" />
            <h4>Women's High Heels</h4>
            <p className={style.pricing}>Ksh.3,900 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/maxi-dress.jpg" loading="lazy" alt="Maxi Dress" />
            <h4>Women's Maxi Dress</h4>
            <p className={style.pricing}>Ksh.3,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/blouse.jpg" loading="lazy" alt="Silk Blouse" />
            <h4>Women's Silk Blouse</h4>
            <p className={style.pricing}>Ksh.2,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/kids-sneakers.jpg" loading="lazy" alt="Kids' Sneakers" />
            <h4>Kids' Sneakers</h4>
            <p className={style.pricing}>Ksh.1,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/kids-jacket.jpg" loading="lazy" alt="Kids' Winter Jacket" />
            <h4>Kids' Winter Jacket</h4>
            <p className={style.pricing}>Ksh.2,800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/kids-jeans.jpg" loading="lazy" alt="Kids' Denim Jeans" />
            <h4>Kids' Denim Jeans</h4>
            <p className={style.pricing}>Ksh.1,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/images/unisex-hoodie.jpg" loading="lazy" alt="Unisex Hoodie" />
            <h4>Couple Hoodie</h4>
            <p className={style.pricing}>Ksh.2,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/unisex-sandals.jpg" loading="lazy" alt="Unisex Sandals" />
            <h4>Sandals</h4>
            <p className={style.pricing}>Ksh.2,199 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/unisex-trainers.jpg" loading="lazy" alt="Unisex Trainers" />
            <h4>Trainers</h4>
            <p className={style.pricing}>Ksh.2,099 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/images/baseball-cap.jpg" loading="lazy" alt="Baseball Cap" />
            <h4>Unisex Baseball Cap</h4>
            <p className={style.pricing}>Ksh.900 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/womens-flats.jpg" loading="lazy" alt="Women's Flats" />
            <h4>Women's Ballet Flats</h4>
            <p className={style.pricing}>Ksh.2,000 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/womens-cardigan.jpg" loading="lazy" alt="Women's Cardigan" />
            <h4>Women's Knitted Cardigan</h4>
            <p className={style.pricing}>Ksh.2,800 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/kids-winter-boots.jpg" loading="lazy" alt="Kids' Winter Boots" />
            <h4>Kids'  Boots</h4>
            <p className={style.pricing}>Ksh.2,200 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/mens-wool-coat.jpg" loading="lazy" alt="Men's Wool Coat" />
            <h4>Men's Wool Coat</h4>
            <p className={style.pricing}>Ksh.5,500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>


        <div className={style.item}>
            <img src="/images/socks-set.jpg" loading="lazy" alt="Socks Set" />
            <h4>Cotton Socks Set</h4>
            <p className={style.pricing}>Ksh.500 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
        </div>

        <div className={style.item}>
            <img src="/images/athletic-set.jpg" loading="lazy" alt="Athletic Tracksuit" />
            <h4>Athletic Tracksuit</h4>
            <p className={style.pricing}>Ksh.3,400 <button className={style.ToCart} onClick={(event) => handleCartItem(event)}>Add to cart</button></p>
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
  );
}

export default Shop;