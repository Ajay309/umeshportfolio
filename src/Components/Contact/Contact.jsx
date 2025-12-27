import React, { useState } from "react";
import "./Contact.css";
// Ensure you have font-awesome linked in your index.html or imported
// If using react-icons, import them. sticking to <i> tags as per your code.

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "584350c1-ddb3-4522-8ce1-851501ad51fe");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Sent Successfully!");
        event.target.reset();
        setTimeout(() => setResult(""), 3000); // Reset button after 3s
      } else {
        console.error("Error", data);
        setResult("Error! Try again.");
      }
    } catch (error) {
      console.error("Fetch Error", error);
      setResult("Error! Try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      
      {/* Background Glow */}
      <div className="contact-glow"></div>

      <div className="contact-title">
        <h1>Get in touch</h1>
        <div className="title-underline"></div>
      </div>

      <div className="contact-section">
        
        {/* Left Side: Info */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
          </p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <div className="icon-box">
                 <i className="fa-solid fa-envelope"></i>
              </div>
              <p>umeshsaini773396@gmail.com</p>
            </div>
            
            <div className="contact-detail">
              <div className="icon-box">
                <i className="fa-solid fa-phone"></i>
              </div>
              <p>+91 7733962307</p>
            </div>
            
           
          </div>
        </div>

        {/* Right Side: Glass Form */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            autoComplete="name"
            required
          />
          
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            autoComplete="email"
            required
          />
          
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            id="message"
            required
          ></textarea>
          
          <button type="submit" className="contact-submit">
            {result ? result : "Submit now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;