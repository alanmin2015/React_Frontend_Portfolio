import React, { useState, useEffect } from 'react';
import "./Education.css"
import UoB from '../../image/UoB.png';
import McGill from '../../image/McGill.png';
import Humber from '../../image/Humber.png';

function Education() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    fetch('https://admin.wenbomin.ca/api/educations')
      .then(response => response.json())
      .then(data => setEducations(data));
  }, []);

  return (
    <div className="Education">
      <h1>My Education</h1>
      <table>
        <thead>
          <tr>
            <th className="university">University</th>
            <th>Degree</th>
            <th>Program</th>
            <th>Graduation Date</th>
          </tr>
        </thead>
        <tbody>
          {educations.map((education) => (
            <tr key={education.id}>
              <td className="university">{education.university}</td>
              <td>{education.degree}</td>
              <td>{education.program}</td>
              <td>{new Date(education.finished_at).toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="imageContainer">
  <img src={UoB} alt="UoB Logo" height={"50px"}/> 
  <img src={McGill} alt="McGill Logo" height={"50px"}/>
  <img src={Humber} alt="Humber Logo"height={"50px"}/>
</div>
    </div>
  );
}

export default Education;
