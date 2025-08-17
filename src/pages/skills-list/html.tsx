import Header from "../header";

function HTMLPage() {
  return (
    <>
      <Header />
      <div className="skills-page">
        <div className="skills-container">
          <h1>HTML Skills & Experience</h1>
          
          <section className="skill-overview">
            <h2>HTML Proficiency</h2>
            <p>
              Strong foundation in HTML5 with experience building semantic, accessible, 
              and well-structured web pages. Focus on writing clean, maintainable code 
              that follows web standards and best practices.
            </p>
          </section>

          <section className="skill-details">
            <h2>Key Areas of Expertise</h2>
            <ul>
              <li>Semantic HTML5 elements and structure</li>
              <li>Accessibility (ARIA labels, semantic markup)</li>
              <li>Form creation and validation</li>
              <li>SEO optimization through proper markup</li>
              <li>Cross-browser compatibility</li>
              <li>Responsive design principles</li>
            </ul>
          </section>

          <section className="projects">
            <h2>HTML Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>Portfolio Website</h3>
                <p>Built semantic HTML structure for personal portfolio with proper heading hierarchy and accessibility features.</p>
              </div>
              <div className="project-card">
                <h3>Landing Page</h3>
                <p>Created responsive landing page with forms, navigation, and content sections using semantic HTML.</p>
              </div>
            </div>
          </section>

          <section className="learning-path">
            <h2>Learning Journey</h2>
            <p>
              Started with basic HTML structure and gradually progressed to advanced concepts 
              including accessibility, semantic markup, and modern HTML5 features. Continuously 
              learning about new standards and best practices.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default HTMLPage;
