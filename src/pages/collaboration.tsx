import "./components/collaboration.css";
import Header from "./header";

function CollaborationPage() {
  function submit() {
    const el = document.getElementById('"el');
    console.log("form not submitted", el);
  }

  return (
    <>
      <Header />
      <div className="collaboration-page">
        <div className="collaboration-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Ready to collaborate? I'm excited to hear about your ideas and
              explore how we can work together to create something amazing.
            </p>
            <div className="contact-methods">
              <p>
                📧 Email:{" "}
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  leecooper6239@gmail.com
                  <a />
                </a>
              </p>
              <p>
                💼 LinkedIn:
                <a href="https://www.linkedin.com/in/lee-cooper-103075273/">
                  {" "}
                  leecooper229
                </a>
              </p>
              <p>
                🐙 GitHub:{" "}
                <a href="https://github.com/leecooper29">leecooper229</a>
              </p>
            </div>
          </div>
          <div className="">
            <form className="contact-form">
              <h4>Connect with Me</h4>
              <div className="form-item">
                <label>First Name:</label>
                <input type="text" id="el"></input>
              </div>
              <div className="form-item">
                <label>Last Name:</label>
                <input type="text" id="el"></input>
              </div>
              <div className="form-item">
                <label>Email:</label>
                <input type="text" id="el"></input>
                <button className="ctt" onClick={submit}>
                  Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollaborationPage;
