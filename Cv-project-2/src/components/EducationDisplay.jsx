import React, { useState } from 'react';

const EducationDisplay=({school, study, gradDate})=>{
    return(
        <div className='educationDisplay'>
            <h1>{school}</h1>
            <div className='educationInfo'>
                <h3>Major: {study}</h3>
                <h3>Graduated: {gradDate}</h3>
            </div>
        </div>
    )
}
export default EducationDisplay;