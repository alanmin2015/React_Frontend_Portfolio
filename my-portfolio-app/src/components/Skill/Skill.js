import React, { useState, useEffect } from 'react';
import "./Skill.css"
function Skill() {
    const [skills, setSkills] = useState([]);
  
    useEffect(() => {
        const fetchSkills = async () => {
          try {
            const response = await fetch('https://admin.wenbomin.ca/api/skills');
            const data = await response.json();
            const sortedSkills = data.sort((a, b) => b.level - a.level);
            setSkills(sortedSkills);
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchSkills();
      }, []);
  
    return (
      <div className='skill'>
        <h2>My Skills</h2>
        <ul>
          {skills.map(skill => (
            <li key={skill.id}>
         <div class="progress-bar" style={{ width: `${skill.level}%` }} >
               <span data-percent={skill.level} >&nbsp;&nbsp;{skill.title} </span>
             </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Skill;