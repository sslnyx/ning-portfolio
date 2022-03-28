import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectSection = () => {
  const data = useOutletContext();
  const [projects, setProjects] = useState([]);
  const [cardPosition, setCardPosition] = useState([]);
  const [activeCard, setActiveCard] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const { projects } = data.find((el) => Object.keys(el)[0] === "projects");
    setProjects(projects);
  }, []);

  useEffect(() => {
    const new_position = [];
    projects.forEach((el, i) => {
      new_position[i] = Math.floor(Math.random() * 2);
    });
    setCardPosition(new_position);
  }, [projects]);

  return (
    <section id="projects">
      <div className="container">
        <h2 className="mb-[50px]">Some Things I’ve Built</h2>
        <div className="flex min-h-[550px] flex-wrap">
          {projects.map((project, i) => (
            <ProjectCard
              {...{ project, setActiveCard, setOpenModal }}
              position={cardPosition[i]}
              className=""
              key={i}
            />
          ))}
        </div>
      </div>

      {/* {JSON.stringify(activeCard)} */}

      <ProjectModal {...{ activeCard, openModal, setOpenModal }} />
    </section>
  );
};

export default ProjectSection;
