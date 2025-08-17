import Header from "./header";

function CollaborationPage() {
  return (
    <>
      <Header />
      <div className="collaboration-page">
        <div className="collaboration-container">
          <h1>Let's Collaborate</h1>

          <section className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Ready to collaborate? I'm excited to hear about your ideas and
              explore how we can work together to create something amazing.
            </p>
            <div className="contact-methods">
              <p>📧 Email: [Your Email]</p>
              <p>💼 LinkedIn: [Your LinkedIn]</p>
              <p>🐙 GitHub: [Your GitHub]</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CollaborationPage;
