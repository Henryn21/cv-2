import { useState } from 'react'

import ResumeForm from './components/ResumeForm'
import ResumeDisplay from './components/ResumeDisplay'
import EducationDisplay from './components/EducationDisplay'
import ExperienceDisplay from './components/ExperienceDisplay'

function App() {
  //state
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('email@email.com');
  const [phone, setPhone] = useState('206123456');

  const [school, setSchool] = useState('U of W');
  const [study, setStudy] = useState('Computer Science');
  const [gradDate, setGradDate] = useState('2020-06-01');

  const [company, setCompany] = useState('Google');
  const [position, setPosition] = useState('Software Engineer');
  const [workDate, setWorkDate] = useState('2020-06-01');
  return (
    <div>
      <ResumeForm name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} school={school} setSchool={setSchool} study={study} setStudy={setStudy} gradDate={gradDate} setGradDate={setGradDate} company={company} setCompany={setCompany} position={position} setPosition={setPosition} workDate={workDate} setWorkDate={setWorkDate}/>
      <ResumeDisplay name={name} email={email} phone={phone} school={school} study={study} gradDate={gradDate} company={company} position={position} workDate={workDate}/>
    </div>
  )
}

export default App
