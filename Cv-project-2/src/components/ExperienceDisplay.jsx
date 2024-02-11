import React, { useState } from 'react';

const ExperienceDisplay=({company, position, workDate})=>{
    return(
        <div className='experienceDisplay'>
            <h1>{company}</h1>
            <h3>{position}</h3>
            <h3>{workDate}</h3>
        </div>
    )
}
export default ExperienceDisplay;