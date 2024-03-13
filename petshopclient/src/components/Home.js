import React from 'react';
import './Home.css'; 
const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our Pet Shop</h1>
        <nav>
          <div className='nav'>
         </div>
        </nav>
      </header>
      <section id="about">
        <h2>About Us</h2>
        <p><b> We are dedicated to providing the best care and products for your beloved pets.</b>  </p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <b>
          <li>Grooming</li>
          <li>Vaccinations</li>
          <li>Training</li>
          </b>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p><b>Feel free to reach out to us for any inquiries or assistance.</b></p>
      </section>
      <div className="home-container">
      <ul >
            <b>
            <li><a href="#about">About Us</a></li>
            
            <li><a href="#contact">Contact Us</a></li>
            </b>
          </ul></div>
      <footer>
        <p>&copy; 2024 Our Pet Shop. All rights reserved.</p>
      </footer>
    </div>
    
  );
};

export default Home;
