import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <div className="about-content">
                <p className="about-text">
                    Welcome to our website! We are dedicated to providing you with the best service possible. Our team is passionate about what we do and we strive to exceed your expectations in every way.
                </p>
                <p className="about-text">
                    Our mission is to deliver high-quality products and services that make a difference in your life. We are constantly innovating and improving to meet the needs of our customers.
                </p>
                <p className="about-text">
                    Thank you for choosing us. We look forward to serving you!
                </p>
            </div>
        </div>
    );
}

export default About;
