import Link from "next/link";
import React from "react";
import { AiFillYoutube, AiOutlineLink } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";
import ProjectPills from "./ProjectPill";

const ProjectCard = ({ attributes }) => {
  const tags = JSON.parse(attributes.stack);
  return (
    <div className="bg-white hover:tech-background-grad shadow-xl hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
      <div className="relative mt-2 mx-2">
        <div className="h-56 rounded-2xl overflow-hidden">
          <img
            src={attributes.photo}
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="absolute bottom-0 left-0 -mb-4 ml-3 flex flex-row">
          {attributes.video ? (
            <div className="h-10 w-10 flex items-center justify-center text-xl bg-white hover:bg-red-500 text-red-500 hover:text-white rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <a target="_blank" href={attributes.video}>
                <AiFillYoutube />
              </a>
            </div>
          ) : (
            <></>
          )}
          <div className="h-10 w-10 ml-2 bg-white hover:bg-blue-600 flex items-center justify-center font-medium text-blue-600 hover:text-white rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out group">
            <a target="_blank" href={attributes.source}>
              <AiOutlineLink />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-6 px-4">
        {tags.map((tag) => {
          return <ProjectPills tag={tag} />;
        })}
      </div>
      <div className="pt-6 pb-6 w-full px-4">
        <h1 className="font-medium leading-none text-base tracking-wider text-gray-400">
          {attributes.title}
        </h1>
      </div>
    </div>
  );
};

export default ProjectCard;
