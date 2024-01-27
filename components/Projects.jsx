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
    webkitURL: "https://google.com",
  },
  {
    title: "Project 3",
    discription:
      "Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2",
    TechStack: "bootstrap and Nextjs",
    photo: "/images/myself.jpg",
    githubUrl: "https://github.com/ahmedabzk",
    webkitURL: "https://google.com",
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
    webkitURL: "https://google.com",
  },
  {
    title: "Project 3",
    discription:
      "Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2 Project 2",
    TechStack: "bootstrap and Nextjs",
    photo: "/images/myself.jpg",
    githubUrl: "https://github.com/ahmedabzk",
    webkitURL: "https://google.com",
  },
];

function Projects() {
  return (
    <section className="mt-5 mb-5 flex items-center" id="projects">
      <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
        {ProjectsData &&
          ProjectsData.map((project, index) => (
            <div
              key={index}
              className="w-[300px] h-[600px] border border-slate-400 flex flex-col gap-2 items-center justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                // style={{ x: 100 }}
              >
                <Image
                  src={project.photo}
                  alt={project.title}
                  width={300}
                  height={150}
                  className="object-contain"
                />
              </motion.div>

              <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {project.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 ml-2">
                {project.discription}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Teck stack: {project.TechStack}
              </p>
              <div className="flex gap-5">
                <div className="flex gap-2 items-center">
                  <IoIosLink />
                  <Link href="" className="text-slate-600 dark:text-slate-300">
                    Live Preview
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <FaGithub className="" />
                  <Link href="" className="text-slate-600 dark:text-slate-300">
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
