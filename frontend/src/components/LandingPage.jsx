import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CalendarDays, Globe, Users, Home, Star } from "lucide-react";
import { testimonials, features, heroImages } from "../data/mock";

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for joining our waitlist!");
    e.target.reset();
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="logo-position">
          <div className="logo">S&E</div>
        </div>
        
        <nav className="nav-bar-wrapper">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><Link to="/dashboard">Features</Link></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">
              We Sync, AI Plans.<br />You Explore
            </h1>
            <p className="hero-subtitle">
              AI-powered travel buddy matching<br /> and itinerary planning — so you travel smart, not hard.
            </p>
            <div className="button-row">
              <Button className="primary-btn">Join waitlist</Button>
              <Button variant="outline" className="secondary-btn">See how it works</Button>
            </div>
          </div>
          
          <div className="hero-images-container">
            <div className="image-group">
              <div className="top-image">
                <img src={heroImages.topImage} alt="Mountain Lake" />
              </div>
              <div className="bottom-image">
                <img src={heroImages.bottomImage} alt="Coastal View" />
              </div>
              <div className="calendar-icon-wrap">
                <div className="calendar-icon">
                  <CalendarDays className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="features" className="why-section">
        <h2 className="why-title">Why Sync & Explore?</h2>
        
        <div className="airplane-path">✈️</div>
        
        <div className="cards">
          {features.map((feature) => {
            const IconComponent = feature.icon === "CalendarDays" ? CalendarDays :
                               feature.icon === "Globe" ? Globe :
                               feature.icon === "Users" ? Users : Home;
            
            return (
              <Card key={feature.id} className="feature-card">
                <CardContent className="card-content">
                  <h3 className="card-title" dangerouslySetInnerHTML={{__html: feature.title.replace(/\s(?=\w+$)/, '<br />')}}></h3>
                  <div className="card-icon-wrapper">
                    <div className="card-icon">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2 className="testimonials-title">What Our Early Users Say?</h2>
        <div className="testimonial-container">
          <Button 
            variant="outline" 
            className="nav-button nav-button-prev"
            onClick={prevTestimonial}
          >
            <span className="arrow">‹</span>
          </Button>
          
          <Card className="testimonial-card">
            <CardContent className="testimonial-card-content">
              <div className="user-image-container">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="user-image"
                />
              </div>
              
              <div className="testimonial-content">
                <p className="review-text">
                  "{testimonials[currentTestimonial].review}"
                </p>
                
                <div className="rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="star" fill="#FDB913" />
                  ))}
                </div>
                
                <span className="user-name">{testimonials[currentTestimonial].name}</span>
              </div>
            </CardContent>
          </Card>
          
          <Button 
            variant="outline" 
            className="nav-button nav-button-next"
            onClick={nextTestimonial}
          >
            <span className="arrow">›</span>
          </Button>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="waitlist-section">
        <div className="waitlist-left">
          <h2 className="waitlist-title">Be Part of the Future of Travel</h2>
          <p className="waitlist-subtitle">Get early access to exclusive AI-powered features.</p>
          
          <div className="airplane">✈️</div>
          
          <div className="logo-row">
            Sync & Explore Logo
          </div>
        </div>
        
        <div className="waitlist-right">
          <form className="form" onSubmit={handleWaitlistSubmit}>
            <h3 className="form-title">Join Waitlist</h3>
            <input type="email" placeholder="Your Email ID" className="input" required />
            <input type="text" placeholder="Your Name" className="input" required />
            <Button type="submit" className="waitlist-button">Join Waitlist</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#service">Service</a>
          <a href="#support">Support</a>
          <a href="#company">Company</a>
          <a href="#legal">Legal</a>
          <a href="#join">Join Us</a>
        </div>
        <div className="footer-icons">
          <div className="footer-icon">📧</div>
          <div className="footer-icon">📅</div>
          <div className="footer-icon">💬</div>
          <div className="footer-icon">🔒</div>
          <div className="footer-icon">⏰</div>
        </div>
        <p className="copyright">Copyright © Sync&Explore. All right reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;