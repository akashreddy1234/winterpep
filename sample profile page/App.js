import React from 'react';
import './style.css';
import profileImg from "./profile.jpg";


const App = () => {
  return (
    <div className="container">
      <header>
        {/* <img src="https://i.pinimg.com/736x/43/6f/0d/436f0dfd206dd100a13c1aed7c9d8342.jpg" className="profile-img" alt="John Doe's" /> */}
        {/* using link direct but to use image import it first */}
        <img src={profileImg} className="profile-img" alt="John Doe" />

        <h1>John Doe</h1>
        <p>React Developer | Frontend Engineer</p>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm a passionate <strong>React Developer</strong> with experience in building modern web applications.
          I specialize in creating efficient, scalable, and user-friendly interfaces.
        </p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
          <li>Redux & Context API</li>
          <li>RESTful APIs</li>
          <li>Git & GitHub</li>
        </ul>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: johndoe@example.com</p>
        <p>
          GitHub: <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">github.com/johndoe</a>
        </p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">linkedin.com/in/johndoe</a>
        </p>
      </section>
    </div>
  );
};

export default App;
