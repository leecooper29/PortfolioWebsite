import { EducationSection } from "./components/education-section";
import { ExperienceSection } from "./components/experience-section";
import { HeroSection } from "./components/hero-section";
import "./components/homepage.css";
import { SkillsList } from "./components/skills-list";
import Header from "./header";

function HomePage() {
  // Data for the components
  const experiences = [
    {
      company: "Noble Lawn and Shrub Care",
      period: "August 2023 - November 2023",
      description: "placeholder text",
    },
    {
      company: "Mow Green",
      period: "September 2021 - March 2022",
      description: "placeholder text",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science",
      institution: "UCONN STAMFORD",
      field: "Computer Science",
      graduationDate: "Spring 2027",
    },
    {
      degree: "Associate of Science",
      institution: "Norwalk Community College",
      field: "Software Development",
      graduationDate: "May 2025",
      honors: "honors student with a 3.35 gpa",
    },
  ];

  const skills = ["html", "css", "javascript", "react", "sql", "python"];

  return (
    <>
      <Header />
      <section className="sec-1">
        <div className="main-grid">
          <div className="item">
            <HeroSection
              title="Front End Software Engineer @Said Startup"
              avatarSrc="https://github.com/shadcn.png"
              avatarFallback="CN"
            />
            <ExperienceSection
              experiences={[
                {
                  company: "Noble Lawn and Shrub Care",
                  period: "2023 - 2024",
                  description:
                    "Worked as a landscape designer with knowledge in airating, mowing, triming, and plant care. I also had to make sure that the clients needs satisfied base on the work that was done.",
                },
                {
                  company: "Mow Green",
                  period: "2021 - 2022",
                  description:
                    "Working for an electric lawn care business involves operating quiet, battery-powered equipment to maintain clients' yards. The job is physically active and often takes place outdoors, providing a greener and more peaceful alternative to traditional gas-powered landscaping.",
                },
              ]}
            />
          </div>
          <EducationSection education={education} />
        </div>
        <div id="skills" className="skills">
          <SkillsList skills={skills} />
        </div>
      </section>
    </>
  );
}

export default HomePage;
