import './Contact.css';
import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Reveal, Bounce, Zoom } from "react-reveal";

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "portfolio_contact",
        "portfolio_form",
        form.current,
        "Y06kCCgJfSn-_bzbc",
      )
      .then(
        () => {
          // If message issent successfully:
          toast.success('Message successfully sent!', {
            position: 'bottom-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
          e.target.reset();
        },
        () => {
          // If the message fails to send:
          toast.error('Failed to send the message, please try again', {
            position: 'bottom-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
          e.target.reset();
        }
      )
  }

  return (
    <>
      <div className="contact-page">
        <br/>
        <br/>
        <br/>
        <div className="cont-text">
          <Reveal>
            <h2 className='cont-title'>
              Would you like to <span style={{color: '#EE82EE'}}>Reach Out</span> or just say <span style={{color: '#EE82EE'}}>'Hi'</span> ?
            </h2>
          </Reveal>
          
          <Zoom>
              <h4 className='message' style={{color: 'white'}}>
                If you like what you see and would like to discuss working with<br/>
                me please reach out by filling this form and I will get back to <br/> 
                you as soon as possible! Similarly, If you have liked your<br/>
                experience exploring my portfolio, please feel free to <br/>
                leave me a message and let me know what you like.
              </h4>
          </Zoom>
          
          <Bounce>
              <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <br/>
                <input 
                  placeholder="What is your name?" 
                  type="text" 
                  name="name" 
                  required 
                  className='input'
                  title='This field is required'
                  onFocus={(e) => {
                    e.target.setAttribute('autocomplete', 'off')
                  }}
                />
                <br/>
                <input
                  placeholder="Your email address"
                  type="email"
                  name="email"
                  required
                  className='input'
                  title='This field is required'
                  onFocus={(e) => {
                    e.target.setAttribute('autocomplete', 'off')
                  }}
                />
                <br/>
                <input
                  placeholder="Subject of message"
                  type="text"
                  name="subject"
                  required
                  className='input'
                  title='This field is required'
                  onFocus={(e) => {
                    e.target.setAttribute('autocomplete', 'off')
                  }}
                />
                <br/>
                <textarea
                  placeholder="Leave me a message"
                  name="message"
                  required
                  className='msg-box'
                  title='Please leave a message'
                />
                <br/>
                {/* <input 
                type="submit" 
                className="button" 
                value="SEND"
                /> */}
                <button 
                  type="submit"
                  className='send'
                >
                  SEND
                </button>
                <ToastContainer />
              </form>
            </div>
          </Bounce>
          
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;