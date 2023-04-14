import React, { useState, useEffect } from 'react';

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://admin.wenbomin.ca/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
  }, []);

  return (
    <div className="App">
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map(project => (
          <div className="project" key={project.id}>
            <img src="https://wenbomin.ca/image/1.jpg" alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.content}</p>
            <p>{project.image} </p>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default Project;
