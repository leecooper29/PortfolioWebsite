import Header from "../header";

function PythonPage() {
  return (
    <>
      <Header />
      <div className="skills-page">
        <div className="skills-container">
          <h1>Python Skills & Experience</h1>
          
          <section className="skill-overview">
            <h2>Python Proficiency</h2>
            <p>
              Strong foundation in Python programming with experience in data analysis, automation, 
              and web development. Focus on writing clean, readable code following PEP 8 standards.
            </p>
          </section>

          <section className="skill-details">
            <h2>Key Areas of Expertise</h2>
            <ul>
              <li>Python fundamentals and data structures</li>
              <li>Object-oriented programming</li>
              <li>File I/O and data processing</li>
              <li>Web frameworks (Flask, Django basics)</li>
              <li>Data analysis libraries (Pandas, NumPy)</li>
              <li>Automation and scripting</li>
              <li>Error handling and debugging</li>
              <li>Testing and documentation</li>
            </ul>
          </section>

          <section className="projects">
            <h2>Python Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>Data Analysis Scripts</h3>
                <p>Developed Python scripts for data processing, analysis, and automation tasks.</p>
              </div>
              <div className="project-card">
                <h3>Web Applications</h3>
                <p>Built web applications using Python frameworks for backend development and API creation.</p>
              </div>
            </div>
          </section>

          <section className="learning-path">
            <h2>Learning Journey</h2>
            <p>
              Started with Python basics and progressed to advanced concepts including web development, 
              data analysis, and automation. Continuously learning about new Python libraries and 
              best practices for building robust applications.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default PythonPage;

