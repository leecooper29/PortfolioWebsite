import Header from "../header";

function JavaScriptPage() {
  return (
    <>
      <Header />
      <div className="skills-page">
        <div className="skills-container">
          <h1>JavaScript Skills & Experience</h1>
          
          <section className="skill-overview">
            <h2>JavaScript Proficiency</h2>
            <p>
              Strong foundation in modern JavaScript (ES6+) with experience in both frontend and backend development. 
              Focus on writing clean, efficient code using modern syntax and best practices.
            </p>
          </section>

          <section className="skill-details">
            <h2>Key Areas of Expertise</h2>
            <ul>
              <li>ES6+ features (arrow functions, destructuring, modules)</li>
              <li>Asynchronous programming (Promises, async/await)</li>
              <li>DOM manipulation and event handling</li>
              <li>Array methods and functional programming</li>
              <li>Error handling and debugging</li>
              <li>Local storage and session storage</li>
              <li>Fetch API and HTTP requests</li>
              <li>Object-oriented programming concepts</li>
            </ul>
          </section>

          <section className="projects">
            <h2>JavaScript Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>Interactive Web Applications</h3>
                <p>Built dynamic web apps with JavaScript for user interactions, form validation, and data handling.</p>
              </div>
              <div className="project-card">
                <h3>API Integration</h3>
                <p>Developed applications that consume REST APIs using fetch and handle asynchronous data operations.</p>
              </div>
            </div>
          </section>

          <section className="learning-path">
            <h2>Learning Journey</h2>
            <p>
              Started with basic JavaScript fundamentals and progressed to modern ES6+ features, 
              asynchronous programming, and advanced concepts. Continuously learning about new 
              JavaScript features and best practices for building robust applications.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default JavaScriptPage;
