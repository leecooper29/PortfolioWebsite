import Header from "../header";

function ReactPage() {
  return (
    <>
      <Header />
      <div className="skills-page">
        <div className="skills-container">
          <h1>React Skills & Experience</h1>
          
          <section className="skill-overview">
            <h2>React Proficiency</h2>
            <p>
              Experienced React developer with strong understanding of modern React patterns including hooks, 
              functional components, and state management. Focus on building scalable, maintainable applications 
              with best practices.
            </p>
          </section>

          <section className="skill-details">
            <h2>Key Areas of Expertise</h2>
            <ul>
              <li>Functional components and React hooks</li>
              <li>State management (useState, useContext, Redux)</li>
              <li>Component lifecycle and side effects</li>
              <li>Props and component composition</li>
              <li>React Router for navigation</li>
              <li>Custom hooks development</li>
              <li>Performance optimization (memo, useMemo, useCallback)</li>
              <li>Testing with React Testing Library</li>
            </ul>
          </section>

          <section className="projects">
            <h2>React Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>Portfolio Website</h3>
                <p>Built this portfolio using React with component-based architecture, custom hooks, and responsive design.</p>
              </div>
              <div className="project-card">
                <h3>Web Applications</h3>
                <p>Developed various web applications using React for state management, routing, and user interactions.</p>
              </div>
            </div>
          </section>

          <section className="learning-path">
            <h2>Learning Journey</h2>
            <p>
              Started with class components and gradually transitioned to functional components and hooks. 
              Continuously learning about new React features, performance optimization techniques, and best 
              practices for building modern web applications.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default ReactPage;
