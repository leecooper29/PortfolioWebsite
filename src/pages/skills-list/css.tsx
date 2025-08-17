import Header from "../header";

function CSSPage() {
  return (
    <>
      <Header />
      <div className="skills-page">
        <div className="skills-container">
          <h1>CSS Skills & Experience</h1>
          
          <section className="skill-overview">
            <h2>CSS Proficiency</h2>
            <p>
              Experienced with modern CSS3 including Flexbox, Grid, animations, and responsive design. 
              Focus on creating beautiful, maintainable styles with clean architecture and performance optimization.
            </p>
          </section>

          <section className="skill-details">
            <h2>Key Areas of Expertise</h2>
            <ul>
              <li>CSS3 features and modern layouts</li>
              <li>Flexbox and CSS Grid for responsive design</li>
              <li>CSS animations and transitions</li>
              <li>CSS custom properties (variables)</li>
              <li>Mobile-first responsive design</li>
              <li>CSS preprocessors (Sass/SCSS)</li>
              <li>CSS architecture and organization</li>
              <li>Cross-browser compatibility</li>
            </ul>
          </section>

          <section className="projects">
            <h2>CSS Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>Responsive Portfolio</h3>
                <p>Designed and implemented responsive layout using CSS Grid and Flexbox with mobile-first approach.</p>
              </div>
              <div className="project-card">
                <h3>Interactive Components</h3>
                <p>Created animated navigation, buttons, and interactive elements using CSS transitions and transforms.</p>
              </div>
            </div>
          </section>

          <section className="learning-path">
            <h2>Learning Journey</h2>
            <p>
              Progressed from basic styling to advanced CSS concepts including modern layout systems, 
              animations, and responsive design. Continuously exploring new CSS features and best practices 
              for creating engaging user experiences.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default CSSPage;
