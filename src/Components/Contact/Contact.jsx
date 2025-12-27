import React from "react";
import "./Contact.css";
import pattern from "../../assets/pattern.svg";

function Contact() {
  const onSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  formData.append("access_key", "584350c1-ddb3-4522-8ce1-851501ad51fe");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,      // ✔ No headers, No JSON
    });

    const data = await response.json();

    if (data.success) {
      alert("Email Sent Successfully");
      event.target.reset();
    } else {
      alert("Error:", data);
    }
  } catch (error) {
    alert("Fetch Error:", error);
  }
};


  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
            temporibus!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <i className="fa-solid fa-envelope"></i>
              <p>umeshsaini773396@gmail.com</p>
            </div>
            
            <div className="contact-detail">
              <i className="fa-solid fa-phone"></i>
              <p>+91 7733962307</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            id="name"
            autoComplete="name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            autoComplete="email"
            id="email"
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="3"
            placeholder="Enter Your Message"
            autoComplete="off"
            id="message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
