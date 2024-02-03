"use client";

import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectsData = [
  {
    title: "Project 1",
    discription:
      "Project 1 Project 1 Project 1 Project 1 Project 1 Project 1 Project 1 Project 1",
    TechStack: "HTML,CSS and JavaScript",
    photo: "/images/photo2.png",
    githubUrl: "https://github.com/ahmedabzk",
    websitUrl: "https://github.com",
  },
  {
    title: "Project 2",
    discription:
      "Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2",
    TechStack: "Tailwind, node js and React",
    photo: "/images/about-image.png",
    githubUrl: "https://github.com/ahmedabzk",
    websitUrl: "https://google.com",
  },
  {
    title: "Real estate project",
    discription:
      "This is a fullstack project where you can sell,buy and rent a property",
    TechStack: "React,NodeJs, Express,Mongo and Tailwind",
    photo: "/images/real-estate1.png",
    githubUrl: "https://github.com/ahmedabzk/realEstate-client",
    websitUrl: "https://real-estate-app-eop3.onrender.com",
  },
  {
    title: "Project 1",
    discription:
      "Project 1 Project 1 Project 1 Project 1 Project 1 Project 1 Project 1 Project 1",
    TechStack: "HTML,CSS and JavaScript",
    photo: "/images/photo2.png",
    githubUrl: "https://github.com/ahmedabzk",
    websitUrl: "https://github.com",
  },
  {
    title: "Project 2",
    discription:
      "Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2",
    TechStack: "Tailwind, node js and React",
    photo: "/images/about-image.png",
    githubUrl: "https://github.com/ahmedabzk",
    websitUrl: "https://google.com",
  },
  {
    title: "Project 3",
    discription:
      "Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2",
    TechStack: "bootstrap and Nextjs",
    photo: "/images/myself.jpg",
    githubUrl: "https://github.com/ahmedabzk",
    websitUrl: "https://google.com",
  },
];

function Projects() {
  return (
    <section
      className="mt-5 mb-5 flex items-center justify-center"
      id="projects"
    >
      <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
        {ProjectsData &&
          ProjectsData.map((project, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[400px] h-[450px] border border-slate-300 dark:border-slate-200 overflow-hidden rounded-lg flex flex-col flex-wrap gap-2 justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.5 }}
                // style={{ x: 100 }}
              >
                <Image
                  src={project.photo}
                  alt={project.title}
                  width={300}
                  height={150}
                  className="w-full h-[270px] object-cover"
                />
              </motion.div>
             
                <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 ml-2 mt-4">
                  {project.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 ml-2">
                  {project.discription}
                </p>
                <p className="text-sm text-slate-400 dark:text-slate-300 ml-2">
                  <span className="text-slate-700 dark:text-slate-200 font-semibold">
                    Teck stack:
                  </span>{" "}
                  {project.TechStack}
                </p>
                <div className="flex justify-between w-full">
                  <div className="flex gap-2 items-center">
                    <IoIosLink />
                    <Link
                      href={project.websitUrl}
                      className="text-slate-600 dark:text-slate-300"
                    >
                      Live Preview
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGithub className="" />
                    <Link
                      href={project.githubUrl}
                      className="text-slate-600 dark:text-slate-300"
                    >
                      View Code
                    </Link>
                  </div>
                </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Projects;
