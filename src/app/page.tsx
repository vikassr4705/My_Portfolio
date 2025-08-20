import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My VLSI Design Portfolio</h1>
        <p>Explore my projects, skills, and experiences in VLSI Design.</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>I am a passionate VLSI Design Engineer with experience in digital design, verification, and implementation.</p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Project 1: Description of project 1.</li>
          <li>Project 2: Description of project 2.</li>
          <li>Project 3: Description of project 3.</li>
        </ul>
      </section>
      <section>
        <h2>Skills</h2>
        <p>Proficient in Verilog, VHDL, SystemVerilog, and various EDA tools.</p>
      </section>
      <footer>
        <p>Contact: vikassr4705@example.com</p>
      </footer>
    </div>
  );
};

export default HomePage;