import React, { useState } from 'react';

const ContactDisplay=({name, email, phone})=>{
    return(
        <div className='contactDisplay'>
            <h1 className='nameDisplay'>{name}</h1>
            <h3 className='emailDisplay'>{email}</h3>
            <h3 className='phoneDisplay'>{phone}</h3>
        </div>
    )
}
export default ContactDisplay;