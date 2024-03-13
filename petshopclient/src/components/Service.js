import React from 'react';
import './serrvice.css';
import groomingImage from './gromming.jpeg';
import vaccinationsImage from './vaccine.jpg'; 
import trainingImage from './training.jpg'; 

const Service = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <ul>
        <li>
          <img src={groomingImage} alt="Grooming" />
          <h3>Grooming</h3>
          <p>Our experienced groomers provide grooming services to keep your pets clean and healthy.</p>
        </li>
        <li>
          <img src={vaccinationsImage} alt="Vaccinations" />
          <h3>Vaccinations</h3>
          <p>We offer vaccinations to ensure your pets are protected against common diseases.</p>
        </li>
        <li>
          <img src={trainingImage} alt="Training" />
          <h3>Training</h3>
          <p>Enroll your pets in our training classes to teach them obedience and socialization skills.</p>
        </li>
      </ul>
    </div>
  );
};

export default Service;
