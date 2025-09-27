import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CalendarDays, Globe, Users, Home, Star } from "lucide-react";

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Taylor",
      review: "Our experience with Sync & Explore has been exceptional. The platform's ability to seamlessly match travel buddies and plan AI-powered itineraries made trip planning effortless. This smart and dependable tool has added great value to our travel journey, making exploration more exciting and stress-free.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Sarah",
      review: "Amazing platform! I found the perfect travel companion for my Europe trip. The AI recommendations were spot-on and helped us discover hidden gems we never would have found otherwise. Highly recommend this to any solo traveler looking for adventure.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Michael", 
      review: "Sync & Explore revolutionized how I plan my trips. The ability to sync schedules with other travelers and get personalized recommendations based on our shared interests made our group trip to Japan absolutely incredible. Five stars!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    }
  ];

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
                <img src="https://images.unsplash.com/photo-1603979649806-5299879db16b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2V8ZW58MHx8fHwxNzU4OTcwNDY2fDA&ixlib=rb-4.1.0&q=85" alt="Mountain Lake" />
              </div>
              <div className="bottom-image">
                <img src="https://images.unsplash.com/photo-1658434061692-c763f2b6be8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNvYXN0fGVufDB8fHx8MTc1ODk3MDQ3MXww&ixlib=rb-4.1.0&q=85" alt="Coastal View" />
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
          <Card className="feature-card">
            <CardContent className="card-content">
              <h3 className="card-title">Sync<br />Travel Dates</h3>
              <div className="card-icon-wrapper">
                <div className="card-icon">
                  <CalendarDays className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card">
            <CardContent className="card-content">
              <h3 className="card-title">Explore<br />Destinations</h3>
              <div className="card-icon-wrapper">
                <div className="card-icon">
                  <Globe className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card">
            <CardContent className="card-content">
              <h3 className="card-title">Find Travel<br />Buddies</h3>
              <div className="card-icon-wrapper">
                <div className="card-icon">
                  <Users className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card">
            <CardContent className="card-content">
              <h3 className="card-title">Affordable<br />Stays</h3>
              <div className="card-icon-wrapper">
                <div className="card-icon">
                  <Home className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
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