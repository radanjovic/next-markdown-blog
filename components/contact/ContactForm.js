import {useState, useEffect} from 'react';
import css from './ContactForm.module.css';
import useInput from '../../hooks/useInput';

import Notification from '../ui/Notification';

// Handle fetch and sending message - could be in separate file, but
// since we only have 1 form, it can go here
async function sendMessage(input) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(input)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    }
}

export default function ContactForm() {
    // Use custom hook to extract values
    const {
        value: name,
        isValid: nameIsValid,
        handleChange: nameChange,
        reset: nameReset
    } = useInput( value => value.trim() !== '');

    const {
        value: email,
        isValid: emailIsValid,
        handleChange: emailChange,
        reset: emailReset
    } = useInput(value => value.trim().includes('@'));

    const {
        value: message,
        isValid: messageIsValid,
        handleChange: messageChange,
        reset: messageReset
    } = useInput(value => value.trim() !== '');

    const [status, setStatus] = useState();

    let formIsValid = false;
    if (nameIsValid && emailIsValid && messageIsValid) {
        formIsValid = true;
    }

    useEffect(() => {
        if (status !== 'pending') {
            const timer = setTimeout( () => {
                setStatus(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('pending');
        if (!formIsValid) {
            return;
        }
        try {
            await sendMessage({email, name, message});
            setStatus('success');
            nameReset();
            emailReset();
            messageReset();
        } catch (error) {
            setStatus('error');
        }
    }

    let notification;

    if(status === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        }
    }

    if (status === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!'
        }
    }

    if (status === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: 'Your message could not be sent!'
        }
    }

    return (<section className={css.contact}>
        <h2>Send me a message</h2>
        <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.controls}>
                <div className={css.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required onChange={emailChange} value={email} />
                </div>
                <div className={css.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' required onChange={nameChange} value={name} />
                </div>
            </div>
            <div className={css.control}>
                <label htmlFor='message'>Your Message</label>
                <textarea id='message' rows='5' required onChange={messageChange} value={message}></textarea>
            </div>
            <div className={css.actions}>
                <button className={css.button} disabled={!formIsValid}>Send Message</button>
            </div>
        </form>
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    </section>)
}