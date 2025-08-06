import style from './Shop.module.css';
import { Link } from "react-router-dom";
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaPaperPlane } from "react-icons/fa";

function Shop({ cartItems, addToCart }) {
  // All products data
  const products = [
    { id: 1, name: "Vintage Jacket", price: 850, image: "/images/vintage jacket.jpg" },
    { id: 2, name: "Classic White Sneakers", price: 1200, image: "/images/sneakers(white).jpg" },
    { id: 3, name: "Oversized Graphic Hoodie", price: 950, image: "/images/graphic-hoodie.jpg" },
    { id: 4, name: "Denim Shorts", price: 850, image: "/images/denim-shorts.jpg" },
    { id: 5, name: "Black T-Shirts (3-Pack)", price: 899, image: "/images/black-tshirts.jpg" },
    { id: 6, name: "Vintage Track Jacket", price: 799, image: "/images/track-jacket.jpg" },
    { id: 7, name: "Classic Denim Jacket", price: 2500, image: "/images/denim-jacket.jpg" },
    { id: 8, name: "High-Waist Ripped Jeans", price: 1800, image: "/images/ripped-jeans.jpg" },
    { id: 9, name: "Oversized Hoodie", price: 1600, image: "/images/oversized-hoodie.jpg" },
    { id: 10, name: "Linen Button-Up Shirt", price: 1400, image: "/images/linen-shirt.jpg" },
    { id: 11, name: "Leather Crossbody Bag", price: 2200, image: "/images/leather-bag.jpg" },
    { id: 12, name: "Nike Air Max Sneakers", price: 5500, image: "/images/air-max.jpg" },
    { id: 13, name: "Basic Cotton Crop Top", price: 900, image: "/images/crop-top.jpg" },
    { id: 14, name: "Slim-Fit Chino Pants", price: 2000, image: "/images/chino-pants.jpg" },
    { id: 15, name: "Classic Bomber Jacket", price: 3200, image: "/images/bomber-jacket.jpg" },
    { id: 16, name: "Casual Slides", price: 1100, image: "/images/slides.jpg" },
    { id: 17, name: "Graphic Print T-Shirt", price: 1000, image: "/images/printed-tee.jpg" },
    { id: 18, name: "Women's Ankle Boots", price: 3800, image: "/images/ankle-boots.jpg" },
    { id: 19, name: "Men's Jogger Pants", price: 1700, image: "/images/joggers.jpg" },
    { id: 20, name: "Wide-Brim Sun Hat", price: 1500, image: "/images/sun-hat.jpg" },
    { id: 21, name: "Genuine Leather Belt", price: 1200, image: "/images/leather-belt.jpg" },
    { id: 22, name: "Men's Formal Shoes", price: 4500, image: "/images/formal-shoes.jpg" },
    { id: 23, name: "Wool Turtleneck Sweater", price: 2100, image: "/images/turtleneck.jpg" },
    { id: 24, name: "Lightweight Windbreaker", price: 2400, image: "/images/windbreaker.jpg" },
    { id: 25, name: "Women's Pleated Skirt", price: 1600, image: "/images/pleated-skirt.jpg" },
    { id: 26, name: "Men's Cargo Pants", price: 2300, image: "/images/cargo-pants.jpg" },
    { id: 27, name: "Knit Beanie Hat", price: 800, image: "/images/beanie.jpg" },
    { id: 28, name: "Checked Flannel Shirt", price: 1900, image: "/images/flannel-shirt.jpg" },
    { id: 29, name: "Casual Leather Loafers", price: 3500, image: "/images/loafers.jpg" },
    { id: 30, name: "Matching Athleisure Set", price: 2700, image: "/images/athleisure-set.jpg" },
    { id: 31, name: "Winter Puffer Jacket", price: 4000, image: "/images/puffer-jacket.jpg" },
    { id: 32, name: "Aviator Sunglasses", price: 1200, image: "/images/sunglasses.jpg" },
    { id: 33, name: "Women's Chelsea Boots", price: 3600, image: "/images/chelsea-boots.jpg" },
    { id: 34, name: "Men's Running Shoes", price: 2300, image: "/images/sport-shoes.jpg" },
    { id: 35, name: "Men's Polo Shirt", price: 1800, image: "/images/polo-shirt.jpg" },
    { id: 36, name: "Men's Formal Pants", price: 2700, image: "/images/formal-pants.jpg" },
    { id: 37, name: "Women's High Heels", price: 3900, image: "/images/womens-heels.jpg" },
    { id: 38, name: "Women's Maxi Dress", price: 3200, image: "/images/maxi-dress.jpg" },
    { id: 39, name: "Women's Silk Blouse", price: 2000, image: "/images/blouse.jpg" },
    { id: 40, name: "Kids' Sneakers", price: 1000, image: "/images/kids-sneakers.jpg" },
    { id: 41, name: "Kids' Winter Jacket", price: 2800, image: "/images/kids-jacket.jpg" },
    { id: 42, name: "Kids' Denim Jeans", price: 1200, image: "/images/kids-jeans.jpg" },
    { id: 43, name: "Couple Hoodie", price: 2000, image: "/images/unisex-hoodie.jpg" },
    { id: 44, name: "Sandals", price: 2199, image: "/images/unisex-sandals.jpg" },
    { id: 45, name: "Trainers", price: 2099, image: "/images/unisex-trainers.jpg" },
    { id: 46, name: "Unisex Baseball Cap", price: 900, image: "/images/baseball-cap.jpg" },
    { id: 47, name: "Women's Ballet Flats", price: 2000, image: "/images/womens-flats.jpg" },
    { id: 48, name: "Women's Knitted Cardigan", price: 2800, image: "/images/womens-cardigan.jpg" },
    { id: 49, name: "Kids' Boots", price: 2200, image: "/images/kids-winter-boots.jpg" },
    { id: 50, name: "Men's Wool Coat", price: 5500, image: "/images/mens-wool-coat.jpg" },
    { id: 51, name: "Cotton Socks Set", price: 500, image: "/images/socks-set.jpg" },
    { id: 52, name: "Athletic Tracksuit", price: 3400, image: "/images/athletic-set.jpg" }
  ];

  const featuredProducts = products.slice(0, 6);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className={style.shop}>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <h1>KLADI</h1>
        </div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
        </ul>
      </nav>
      
      <div className={style.welcome}>
        <h1>KLADI</h1>
        <p>Streetwear Essentials, Unmatched Vibes</p>
      </div>

      <div className={style.featureHead}>
        <h2>Featured Items</h2>
      </div>

      <div className={style.items}>
        {featuredProducts.map(product => (
          <div className={style.item} key={product.id}>
            <img src={product.image} loading="lazy" alt={product.name} />
            <h4>{product.name}</h4>
            <p className={style.pricing}>
              Ksh.{product.price.toLocaleString()}
              <button 
                className={style.ToCart} 
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            </p>
          </div>
        ))}
      </div>

      <div className={style.allProducts}>
        <h2>All Products</h2>
      </div>

      <div className={style.items}>
        {products.map(product => (
          <div className={style.item} key={product.id}>
            <img src={product.image} loading="lazy" alt={product.name} />
            <h4>{product.name}</h4>
            <p className={style.pricing}>
              Ksh.{product.price.toLocaleString()}
              <button 
                className={style.ToCart} 
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            </p>
          </div>
        ))}
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
                <li><Link to="/home" className={style.link}>Home</Link></li>
                <li><Link to="/shop" className={style.link}>Shop</Link></li>
                <li><Link to="/contact" className={style.link}>Contact</Link></li>
                <li><Link to="/cart" className={style.link}>Cart</Link></li>
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