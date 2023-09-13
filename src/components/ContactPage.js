import { Navbar } from './Navbar';
import { Footer } from 'src/components/Footer';
import profileImage from '../images/brendan_profile_image.jpg';
import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip'
import emailjs from '@emailjs/browser';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

export const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [disableButton, setDisableButton] = useState(true);

    useEffect(() => {
        if (name.length > 0 && email.length > 0 && message.length > 0)
            setDisableButton(false);
        else
            setDisableButton(true);
    }, [name, email, message]);

    const templateParams = {
        from_name: name,
        to_name: 'Brendan',
        message: message,
        reply_to: email
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setDisableButton(true);
        emailjs.send('service_f85lokp','template_yoo7oijs', templateParams, 'bB2PqL_oGNH_ecooQ')
            .then((response) => {
                Store.addNotification({
                    title: "Success",
                    message: "Thank you for your inquiry!",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
                  setName('');
                  setEmail('');
                  setMessage('');
            }, (err) => {
                Store.addNotification({
                    title: "Error",
                    message: "Email failed to send",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
        });
    }

    return (
        <div class='page-container'>
            <Navbar/>
            <ReactNotifications className="notification"/>
            <div className="page-section contact-form-column-container">
                <img className="profile-image" src={profileImage}></img>
                <form onSubmit={sendEmail}>
                    <div className="contact-form-container">
                        <h1>Contact Form</h1>
                        <p className="page-text-description">For requests, please include details of the occasion, as well as the anticipated date, time, location, and budget. Feel free to include any questions, concerns, or requests that you have!<br></br><br></br>All submissions go directly to my email, which I usually respond to within 24 hours.</p>
                        <br></br>
                        <label for="name">Name</label>
                        <input
                            type='text'
                            name='name'
                            className='form-control formInput'
                            placeholder='Name'
                            label='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </input>
                        <label for="email">Email</label>
                        <input
                            type='text'
                            name='email'
                            className='form-control formInput'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <label for="body">Message</label>
                        <textarea
                            type='text'
                            name='body'
                            className='form-control formInput contact-form-message-box'
                            cols='60'
                            rows='10'
                            placeholder='Message here'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <Tooltip anchorSelect='#submit-button-tooltip' content={disableButton ? 'All fields must be filled out before submitting' : ''}/>
                        <div className="submit-button-container" id='submit-button-tooltip'>
                            <button className="submit-button" disabled={disableButton} type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}