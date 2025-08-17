import Header from "../header";

function SQLPage() {
  return (
    <>
      <Header />
      <div className="skills-page">
        <div className="skills-container">
          <h1>SQL Skills & Experience</h1>
          
          <section className="skill-overview">
            <h2>SQL Proficiency</h2>
            <p>
              Strong foundation in SQL with experience in database design, query optimization, and data manipulation. 
              Focus on writing efficient, readable queries and understanding database relationships.
            </p>
          </section>

          <section className="skill-details">
            <h2>Key Areas of Expertise</h2>
            <ul>
              <li>Database design and normalization</li>
              <li>CRUD operations (SELECT, INSERT, UPDATE, DELETE)</li>
              <li>JOIN operations and table relationships</li>
              <li>Aggregate functions and GROUP BY</li>
              <li>Subqueries and complex queries</li>
              <li>Indexing and query optimization</li>
              <li>Database administration basics</li>
              <li>SQL injection prevention</li>
            </ul>
          </section>

          <section className="projects">
            <h2>SQL Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>Database Design</h3>
                <p>Designed and implemented database schemas for various applications with proper relationships and constraints.</p>
              </div>
              <div className="project-card">
                <h3>Data Analysis</h3>
                <p>Performed complex data analysis using SQL queries to extract insights and generate reports.</p>
              </div>
            </div>
          </section>

          <section className="learning-path">
            <h2>Learning Journey</h2>
            <p>
              Started with basic SQL queries and progressed to advanced concepts including database design, 
              optimization, and complex query writing. Continuously learning about new SQL features and 
              best practices for efficient data management.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default SQLPage;
