import React from "react";

const ProjectCard = ({ project, setActiveCard, setOpenModal, position }) => {
  const { title, content, link, github, img, className, buit_with } = project;
  return (
    <div
      className={`${className} position-${position} mb-10 flex flex-col basis-1/1 md:basis-1/4 border-l-2 border-l-awhite border-b-2 md:border-b-0 border-awhite`}
    >
      {/* <div className="fixed bg-white h-screen w-full top-0 left-0"></div> */}
      <div className={`md:h-[350px] md:w-[40%] relative img-wrapper`}>
        <a href={link} target="_blank">
          <div className="cursor-pointer transition-all z-10 ease-in-out bg-awhite hover:bg-inherit h-full w-full absolute opacity-50"></div>
          <img
            src={`/img/projects/${img}`}
            className="grayscale-[100%] contrast-50 border-2 border-red h-full w-full object-cover object-[top_left] aspect-[4/5]"
            alt={img}
          />
        </a>
      </div>

      <div className="flex flex-col relative">
        <div className={`p-5 content-wrapper`}>
          <h3 className="font-bold">{title}</h3>
          <p>{content}</p>
        </div>

        <div className="flex relative">
          <div
            className="btn-primary"
            onClick={() => {
              setOpenModal(true);
              setActiveCard(project);
            }}
          >
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
