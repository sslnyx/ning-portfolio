import { useEffect, useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";

const ExperienceSection = () => {
  const data = useOutletContext();
  const [experience, setExperience] = useState([]);
  const [exp, setExp] = useState(null);
  const expBtn = useRef([]);

  useEffect(() => {
    const { experience } = data.find(
      (el) => Object.keys(el)[0] === "experience"
    );
    setExperience(experience);
    setExp(experience[0]);
    // console.log(experience[0])
  }, []);

  const tabHandler = (exp) => {
    return (ev) => {
      setExp(exp);
      expBtn.current.forEach((btn) => {
        btn.classList.remove("activeBtn");
      });
      ev.target.classList.add("activeBtn");
    };
  };

  return (
    <section id="experience">
      <div className="container">
        <h2>Experience</h2>

        <div className="flex flex-wrap justify-center md:flex-row">
          <ul className="flex overflow-x-auto md:flex-col md:border-l-2 border-red mb-5 pb-3 md:pb-0 md:mb-0 mr-0 md:mr-10">
            {experience.map((exp, i) => (
              <li
                key={i}
                ref={(el) => (expBtn.current[i] = el)}
                className={`px-5 py-1 mb-0 md:mb-5 last:mb-0 whitespace-nowrap cursor-pointer ${
                  i === 0 ? "activeBtn" : ""
                }`}
                onClick={tabHandler(exp)}
              >
                {exp.company}
              </li>
            ))}
          </ul>

          {exp ? (
            <div className="max-w-[550px] w-[550px]">
              <h3 className="font-bold">
                {exp.title} <span className="text-red"> @ {exp.company}</span>
              </h3>
              <p className="mb-5">{exp.date}</p>
              <ul className="pl-[16px]">
                {exp.responsiblity.map((res) => (
                  <li className="list-disc mb-3 last:mb-0">{res}</li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
