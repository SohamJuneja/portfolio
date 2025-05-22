import { useState, useEffect } from "react";
import { Send, Mail, Linkedin, Instagram, Github, Globe, ChevronRight } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

// Import the CSS file
import "./Contact.css";

export default function Contact() {
  // Apply the contact-page-body class when component mounts and remove when unmounts
  useEffect(() => {
    // Add the class to the body when component mounts
    document.body.classList.add('contact-page-body');
    
    // Remove the class from the body when component unmounts
    return () => {
      document.body.classList.remove('contact-page-body');
    };
  }, []);
  const [activeCard, setActiveCard] = useState(null);
  const [state, handleSubmit] = useForm("mrbqdrdv");
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Handle successful submission
  useEffect(() => {
    if (state.succeeded) {
      setShowConfirmation(true);
      
      // Reset form and button after 5 seconds
      const timer = setTimeout(() => {
        setShowConfirmation(false);
        document.getElementById("contact-form").reset();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // Contact methods data - reduced to just 2 cards
  const contactMethods = [
    {
      id: 0,
      icon: <Mail />,
      title: "Email Me",
      description: "Send me an email directly",
      action: "junejasoham@gmail.com"
    },
    {
      id: 1,
      icon: <Globe />,
      title: "Explore My Socials",
      description: "Connect with me across platforms",
      socials: [
        { name: "LinkedIn", icon: <Linkedin size={18} />, url: "linkedin.com/in/yourprofile" },
        { name: "Instagram", icon: <Instagram size={18} />, url: "@your_instagram" },
        { name: "GitHub", icon: <Github size={18} />, url: "github.com/yourusername" },
        { name: "Medium", icon: <Globe size={18} />, url: "medium.com/@yourusername" }
      ]
    }
  ];

  return (
    <div className="netflix-contact">
      <main className="netflix-main">
        <div className="netflix-grid">
          {/* Left column - Contact Form */}
          <div className="netflix-card netflix-form-card">
            <h2 className="netflix-title">Ready to Talk?</h2>

            <form id="contact-form" onSubmit={handleSubmit} className="netflix-form">
              <div className="netflix-form-group">
                <label htmlFor="name" className="netflix-label">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="netflix-input"
                  disabled={state.submitting || showConfirmation}
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="netflix-form-group">
                <label htmlFor="email" className="netflix-label">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="netflix-input"
                  disabled={state.submitting || showConfirmation}
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="netflix-form-group">
                <label htmlFor="message" className="netflix-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What would you like to discuss?"
                  required
                  className="netflix-textarea"
                  disabled={state.submitting || showConfirmation}
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button 
                type="submit" 
                className={`netflix-button ${state.submitting ? 'netflix-button-loading' : ''}`}
                disabled={state.submitting || showConfirmation}
              >
                {state.submitting ? (
                  <>
                    <div className="netflix-spinner"></div>
                    Sending...
                  </>
                ) : showConfirmation ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="netflix-icon" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right column - Photo with Interactive Elements */}
          <div className="netflix-contact-visual">
            <div className="netflix-visual-container">
              {/* Background elements with gradient overlay */}
              <div className="netflix-backdrop">
                <div className="netflix-backdrop-gradient"></div>
              </div>
              
              <div className="netflix-contact-actions">
                {/* Profile photo section */}
                <div className="netflix-profile-section">
                  <div className="netflix-profile-photo">
                    {/* Replace with your actual photo URL or keep using placeholder */}
                    <img src="/images/dp1.jpg" alt="Profile" className="netflix-profile-image" />
                  </div>
                  <h2 className="netflix-title netflix-visual-title">Let's Connect</h2>
                </div>
                
                <div className="netflix-visual-buttons">
                  {contactMethods.map((method) => (
                    <div 
                      key={method.id}
                      className={`netflix-action-button ${activeCard === method.id ? 'netflix-action-active' : ''}`}
                      onMouseEnter={() => setActiveCard(method.id)}
                      onMouseLeave={() => setActiveCard(null)}
                      onClick={() => {
                        console.log(`Clicked: ${method.title}`);
                      }}
                    >
                      <div className="netflix-action-icon">
                        {method.icon}
                      </div>
                      <div className="netflix-action-content">
                        <h3 className="netflix-action-title">{method.title}</h3>
                        {activeCard === method.id && (
                          <div className="netflix-action-details">
                            <p className="netflix-action-description">{method.description}</p>
                            
                            {method.id === 0 ? (
                              <p className="netflix-action-info">{method.action}</p>
                            ) : (
                              <div className="netflix-socials-container">
                                {method.socials.map((social, index) => (
                                  <div key={index} className="netflix-social-item">
                                    <span className="netflix-social-icon">{social.icon}</span>
                                    <span className="netflix-social-name">{social.name}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            <ChevronRight className="netflix-action-arrow" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="netflix-tagline">
                  <p>Let's create something amazing together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}