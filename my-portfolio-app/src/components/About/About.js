import React from "react";
import "./About.css";
import profile from "../../image/profile.png";

function About() {
  return (
    <div className="About">
      <h1>About Me</h1>
      <p>
        <img id="profile" src={profile} alt="profile" height="280" /> Hi there,
        I am a highly motivated person in the last year of my studies in the Web
        Development Program at Humber College. With a background in Engineering,
        Project Management, and Web Development, I am excited to leverage my
        knowledge, skills, and experience to contribute to your team. I have a
        Bachelor’s degree in Mechanical Engineering from the University of
        Birmingham and a Master’s degree in Mechanical Engineering from McGill
        University, published two papers, and completed in one year and a half.
        In addition, I have completed three years of relevant professional
        experience in fluid dynamic engineering and project management. Through
        my professional experience, I developed technical abilities and learned
        how to effectively lead and manage teams and projects. As a current
        student in the Web Development Program, I have a comprehensive
        understanding of the fundamentals of web development and have developed
        a strong programming background, learning various languages and tools
        such as HTML, CSS, JavaScript, C#, PHP, MongoDB, Node.js and React. I am
        highly organized and detail-oriented, with excellent problem-solving and
        critical-thinking skills. I am confident that my unique combination of
        technical and professional experience will be an asset to your team.
      </p>
      <div id="contact">
      <h2 >Contact Me</h2>
      <dev>
      Email: <a href="mailto:wenbo.min@mail.mcgill.ca">wenbo.min@mail.mcgill.ca</a>
      <br />
      </dev>
      <dev>
      Linkedin: <a href="https://www.linkedin.com/in/wenbo-min-398255171/">
        https://www.linkedin.com/in/wenbo-min-398255171/
      </a>
      <br />
      </dev>
      <dev>
      Github:
      <a href="https://github.com/alanmin2015">
        https://github.com/alanmin2015
      </a>
      </dev>
      </div>
    </div>
  );
}

export default About;
