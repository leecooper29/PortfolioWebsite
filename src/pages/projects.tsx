import Header from "./header";

function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="projects-page">
        <div className="projects-container">
          <h1>Recent Projects</h1>

          <section className="featured-projects"></section>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
