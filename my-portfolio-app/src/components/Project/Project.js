import React, { useState, useEffect } from 'react';
import './Project.css';

function Project() {
  const [projects, setProjects] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch('https://admin.wenbomin.ca/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
      
    fetch('https://admin.wenbomin.ca/api/types')
      .then(response => response.json())
      .then(data => setTypes(data));
  }, []);

  console.log(types);

 
  return (
    <div className="AppProjects">
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map(project => (
          <div className="project" key={project.id}>
             {console.log(types.find(type => type.id === project.type_id)?.title)}
            <img src={project.image}  alt={project.title} />
            <h2>{project.title}- {types.find(type => type.id === project.type_id)?.title}
</h2>
<p>{project.type.title}</p>
            <p>{project.content}</p>
            <a href={project.url}>Github</a>             
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default Project;
