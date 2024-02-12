import React from 'react';
import ContactDisplay from './ContactDisplay';
import EducationDisplay from './EducationDisplay';
import ExperienceDisplay from './ExperienceDisplay';
import './css/ResumeDisplay.css';
let ResumeDisplay=({name, email, phone, school, study, gradDate, company, position, workDate})=>{
    return(
        <div className='resumeDisplay'>
            <h1>Resume</h1>
            <h2 className='sectionTitle'>Contact Information</h2>
            <ContactDisplay name={name} email={email} phone={phone}/>
            <h2 className='sectionTitle'>Education</h2>
            <EducationDisplay school={school} study={study} gradDate={gradDate}/>
            <h2 className='sectionTitle'>Experience</h2>
            <ExperienceDisplay company={company} position={position} workDate={workDate}/>
        </div>
    )
}   
export default ResumeDisplay;