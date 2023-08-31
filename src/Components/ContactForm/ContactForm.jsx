import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from 'react-bootstrap';
import SocialIcons from '../SocialIcons/SocialIcons'
import './ContactForm.css'

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mpzbknn");
  if (state.succeeded) {
      return (
          <div className='thank-you-container'>
            {/* TODO: edit Thank you */}
            <h1 className='contact-title'>Contact</h1>
            <hr className='contact-hr' />
            <section className='thank-you-text-container'>
                  <p className='thank-you-text'>
                      I'm excited to connect with fellow professionals, tech enthusiasts, and industry leaders. Please feel free to reach out!
                      <br/>
                      📧 Email: mohammedqasim.a.khan@gmail.com
                      📞 Phone: 416-857-6250</p>
              <p className='thank-you-text'>Thank you for visiting!</p>
            </section>
            <br />
            <SocialIcons></SocialIcons>
          </div>
        
      )

  }
  return (
    
    <div className='contact-container' id='contact'>
      <div>
        <h1 className='contact-title'>Contact</h1>
        <hr className='contact-hr' />
        <section className='contact-text-container'>
                  <p className='contact-text'>
                      I'm excited to connect with fellow professionals, tech enthusiasts, and industry leaders. Please feel free to reach out!
                      <br />
                      📧 Email: mohammedqasim.a.khan@gmail.com
                      📞 Phone: 416-857-6250</p>
        </section>
        <SocialIcons></SocialIcons>
        <br />
        <div className="form-text">
          <p className='form-message'
          >Send me a message:</p>
        </div>
    </div>
      <div className='form-container'>
        <form 
        className='form'
        onSubmit={handleSubmit}>
        {/* Name */}
        <input
          className="input"
          id="name"
          type="name" 
          name="name"
          required
          placeholder='Name'
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <br /> <br />
        {/* email */}
        <input
          className="input"
          id="email"
          type="email" 
          name="email"
          required
          placeholder='Your E-mail'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <br /><br />
        {/* subject */}
        <input
          className="input"
          id="subject"
          type="subject" 
          name="subject"
          required
          placeholder='Subject'
        />
        <br /><br/>
        {/* message */}
        <textarea
          className="w-75 mb-4"
          rows={5}
          id="message"
          name="message"
          required
          placeholder="Message..."
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <br />

          <Button 
          variant='outline-dark'
          type="submit" 
          disabled={state.submitting} 
          // onClick={() => setSmShow(true)} 
          className="me-2">
            SEND MESSAGE
          </Button>
         
        </form>
      </div>

    </div>
  );
}

export default ContactForm;