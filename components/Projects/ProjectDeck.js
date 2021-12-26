import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectDeck = ({ Projects, github }) => {
  return (
    <section
      id="project"
      className="md:p-0 p-4 mt-20 mx-auto max-w-screen-lg box-content"
    >
      <h2 className="section-title project-section-title w-max max-w-full mb-16px pt-58px px-0 pb-16px md:mb-12px md:pt-40px md:px-0 md:pb-12px sm:mb-8px sm:pt-16px sm:px-0 sm:pb-8px sm:max-w-full">
        Projects
      </h2>
      <div className="container mx-auto mt-4 px-0 md:px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
          {Projects.map((Project) => (
            <ProjectCard key={Project.id} {...Project} />
          ))}
        </div>
        <a
          target="_blank"
          href={github}
          style={{ fontFamily: "SF UI Display Medium" }}
          className="mt-7"
        >
          Click here to view all projects in Github
        </a>
      </div>
    </section>
  );
};

export default ProjectDeck;
