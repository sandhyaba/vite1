import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import Form from 'react-bootstrap/Form';
import Arrow from '../../assets/white-arrow.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [ userForm, setUserForm ] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch('http://192.168.1.142:6500/v1/user/contact/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userForm)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle success response
            console.log('Success:', data);
            toast.success("Submit successfully!")
            setUserForm({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
    }
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" className='msg-icon' /> </h3>
                <p> feel free to reach out The fact is that there is no perfect formula for the number of form fields
                    or how many fields should be mandatory and optional.
                    It all depends on you and your clients need Just always follow the strategy that will
                    help you to grow your business when you choose the fields and their number.</p>
                <div className="email">
                    <img src={email_icon} alt="" className='email-icon' />
                    abcd23@gmail.com</div>
                <div className="phone"><img src={phone_icon} alt="" className='phone-icon' />
                    +91 9347486856</div>
                <div className="location"><img src={location} alt="" className='location-icon' />
                    2788 San Tomas Expressway
                    Santa Clara, CA 95051
                </div>

            </div>
            <div className="form">
                <Form onSubmit={handleSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name" value={userForm.name} onChange={handleChange} ></input>
                    <label>Email: </label>
                    {/* <input type="email" name="eamil" value={userForm.email} onChange={handleChange}></input> */}
                    <input type="text" name="email" value={userForm.email} onChange={handleChange} ></input>
                    <label>Phone: </label>
                    <input type="text" name="phone" value={userForm.phone} onChange={handleChange}></input>
                    <label>Message: </label>
                    <textarea type="message" name="message" lh='6' value={userForm.message} onChange={handleChange}></textarea>
                    <div className="submit-btn">
                        <button className='see-btn'>Submit Now <img src={Arrow} alt="arrow" /></button>
                    </div>
                    <ToastContainer />
                </Form>

            </div>

        </div>
    )
}

export default Contact
