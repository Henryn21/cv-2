import React, { useState } from 'react';

const ContactInput = ({ name, setName, email, setEmail, phone, setPhone })=>{
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    return(
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
        </div>
    )
}
export default ContactInput;