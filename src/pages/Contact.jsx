import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Right Section (Contact Form) */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>
     Hi,you Need help? Use the form below or email us at{" "}
          <a href="mailto:hello@luca_castello.com">lucascastello69500@gmail.com</a>
        </p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Left Section (Map) */}
      <div className="contact-map">
        <iframe
          title="Luca Castello Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092994841688!2d2.9722279!3d36.7614033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb1c69005daab%3A0xe619624152708390!2sLa%20Patisserie%20Par%20Lucas%20Castello!5e0!3m2!1sen!2s!4v1690138931247!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="map-overlay">Dely Brahim, Algeria</div>
      </div>
    </div>
  );
};

export default Contact;
