import React, { useState } from 'react';
import ContactInput from './ContactInput';
import EducationInput from './EducationInput';
import ExperienceInput from './ExperienceInput';
const ResumeForm = ({ name, setName, email, setEmail, phone, setPhone, school, setSchool, study, setStudy, gradDate, setGradDate, company, setCompany, position , setPosition, workDate, setWorkDate }) => {
    return (
        <div>
            <ContactInput name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone}/>
            <EducationInput school={school} setSchool={setSchool} study={study} setStudy={setStudy} gradDate={gradDate} setGradDate={setGradDate}/>
            <ExperienceInput company={company} setCompany={setCompany} position={position} setPosition={setPosition} workDate={workDate} setWorkDate={setWorkDate}/>
        </div>
    );
};

export default ResumeForm;
