import "./components/about.css";
import Header from "./header";

function AboutPage() {
  return (
    <>
      <Header />
      <section>
        <div className="about-me">
          <h3>About me:</h3>
          <article>
            <p>
              As a junior Computer Science student with over two years of coding
              experience, I have developed a strong foundation in front-end
              development. I am highly proficient in React, where I've built
              dynamic user interfaces and single-page applications. The
              expertise includes leveraging React Hooks to manage state and side
              effects efficiently. Key skills also include modern JavaScript
              (ES6+), HTML5, and CSS3. Eager to expand this expertise, I am now
              focused on becoming proficient in back-end development to
              eventually transition into a full-stack role. I am currently
              building RESTful APIs with Node.js and Express.js and am gaining
              hands-on experience with databases like MongoDB to handle data
              persistence. A goal is to apply problem-solving skills to new
              challenges and build comprehensive, end-to-end applications.
              Ultimately, I aim to make a smooth transition into big tech, where
              I can contribute to large-scale, impactful projects and continue
              to grow in a fast-paced, innovative environment.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
