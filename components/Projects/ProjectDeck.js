import React from "react";
import Projects from "../../dummyData/Projects";
import ProjectCard from "./ProjectCard";

const ProjectDeck = () => {
  return (
    <section className="p-0 mt-20 mx-auto max-w-screen-lg box-content">
      <h2 className="section-title w-max max-w-full mb-16px pt-58px px-0 pb-16px md:mb-12px md:pt-40px md:px-0 md:pb-12px sm:mb-8px sm:pt-16px sm:px-0 sm:pb-8px sm:max-w-full">
        Projects
      </h2>
      <div className="container mx-auto px-0 md:px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
          {Projects.map((element, index) => (
            <ProjectCard
              key={index}
              title={element.title}
              likes={element.likes}
              order={index + 1}
              image={element.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDeck;
