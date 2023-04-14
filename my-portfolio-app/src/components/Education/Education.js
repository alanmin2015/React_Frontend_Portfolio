import React, { useState, useEffect } from 'react';
import "./Education.css"

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
            <th>University</th>
            <th>Degree</th>
            <th>Program</th>
            <th>Graduation Date</th>
          </tr>
        </thead>
        <tbody>
          {educations.map((education) => (
            <tr key={education.id}>
              <td>{education.university}</td>
              <td>{education.degree}</td>
              <td>{education.program}</td>
              <td>{new Date(education.finished_at).toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Education;
