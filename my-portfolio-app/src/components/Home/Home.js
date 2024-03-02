import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faHtml5, faCss3Alt, faJs, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to my portfolio website</h1>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;My name is Wenbo Min, and I am a passionate and energetic Full-Stack developer currently working in Miebach Consulting Inc. I have a strong motivation for creating stunning and highly functional websites, software, and applications with concise and readable code. I invite you to explore some of my recent projects, and if you are interested in collaborating, please don't hesitate to get in touch. 
      <br/>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;Currently looking for Front-End Developer, Web Developer and Full-Stack Developer position based in Greater Toronto Area. Willing to work remotely within Canada. Also available to work in USA(TN VISA).</div>
      <br/>Technology used in this Website: 
      <br/>
      <div className="icon-container">
        <span className="icon-item">
          <FontAwesomeIcon icon={faReact} className="icon rotated animated" size="3x" style={{ color: '#61DAFB' }} />
          <span className="icon-text">React</span>
        </span>
        <span className="icon-item">
          <FontAwesomeIcon icon={faNode} className="icon" size="3x" style={{ color: '#68A063' }} />
          <span className="icon-text">Node.js</span>
        </span>
        <span className="icon-item">
          <FontAwesomeIcon icon={faHtml5} className="icon" size="3x" style={{ color: '#E34F26' }} />
          <span className="icon-text">HTML</span>
        </span>
        <span className="icon-item">
          <FontAwesomeIcon icon={faCss3Alt} className="icon" size="3x" style={{ color: '#1572B6' }} />
          <span className="icon-text">CSS</span>
        </span>
        <span className="icon-item">
          <FontAwesomeIcon icon={faJs} className="icon" size="3x" style={{ color: '#F7DF1E' }} />
          <span className="icon-text">JavaScript</span>
        </span>
        <span className="icon-item">
          <FontAwesomeIcon icon={faPhp} className="icon" size="3x" style={{ color: '#8892BF' }} />
          <span className="icon-text">PHP</span>
        </span>
        <span className="icon-item">
          <FontAwesomeIcon icon={faLaravel} className="icon" size="3x" style={{ color: '#FF2D20' }} />
          <span className="icon-text">Laravel</span>
        </span>
      </div>
      </p>
    </div>
  );
}

export default Home;
