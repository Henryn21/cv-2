import React, { useState } from 'react';

const ExperienceInput = ({ company, setCompany, position , setPosition, workDate, setWorkDate })=>{
    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    };

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    };

    const handleWorkDateChange = (e) => {
        setWorkDate(e.target.value);
    };
    return(
        <div>
            <label htmlFor="company">Company:</label>
            <input type="text" id="company" value={company} onChange={handleCompanyChange} />

            <label htmlFor="position">Position:</label>
            <input type="text" id="position" value={position} onChange={handlePositionChange} />

            <label htmlFor="date">Date:</label>
            <input type="text" id="workDate" value={workDate} onChange={handleWorkDateChange} />
        </div>
    )
}
export default ExperienceInput;