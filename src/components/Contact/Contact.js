import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <form id="portfolio_form">
        <input type="hidden" name="contact_number"/>
        <label>Name</label>
        <input type="text" name="user_name"/>
        <br/>
        <label>Email</label>
        <input type="email" name="user_email"/>
        <br/>
        <label>Message</label>
        <textarea name="message"></textarea>
        <br/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default Contact;