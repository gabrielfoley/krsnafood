import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Volunteer.css';

const Volunteer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lfi4cs5',
        'template_o95fsm9',
        form.current,
        'E_i_NoIfLELjHBg7z'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='form'>
      <div className='formTitle'>Volunteer Today</div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Full Name' required />
        <input type='email' name='email' placeholder='Email' required />
        <textarea
          required
          name='message'
          rows='7'
          placeholder='Message'
        ></textarea>
        <button type='submit' className='formBtn'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Volunteer;
