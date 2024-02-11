import React, { useState } from 'react';

const EducationInput = ({ school, setSchool, study, setStudy, gradDate, setGradDate })=>{
    const handleSchoolChange = (e) => {
        setSchool(e.target.value);
    };

    const handleStudyChange = (e) => {
        setStudy(e.target.value);
    };

    const handleDateChange = (e) => {
        setGradDate(e.target.value);
    };
    return(
        <div>
            <label htmlFor="name">School:</label>
            <input type="text" id="name" value={school} onChange={handleSchoolChange} />

            <label htmlFor="study">Study:</label>
            <input type="text" id="study" value={study} onChange={handleStudyChange} />

            <label htmlFor="schoolDate">Date:</label>
            <input type="text" id="schoolDate" value={gradDate} onChange={handleDateChange} />
        </div>
    )
}
export default EducationInput;