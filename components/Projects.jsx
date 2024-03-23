"use client";

import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectsData = [
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
    title: "My portfolio project",
    discription: "This my portfolio project",
    TechStack: "React,Next.js 14,framer-motion and Tailwind",
    photo: "/images/portfolio.png",
    githubUrl: "https://github.com/ahmedabzk/my-portfolio",
    websitUrl: "https://ahmedabzk.dev",
  },
  {
    title: "Web 3 project",
    discription: "a crowdfunding web3 project",
    TechStack: "Smart contruct, solidity, thirdweb,React and css",
    photo: "/images/crowdfunding.png",
    githubUrl: "https://github.com/ahmedabzk/crowfunding-web3",
    websitUrl: "https://crowdfunding-client-tau.vercel.app/",
  },
  {
    title: "ecommerce project",
    discription:
      "An e-commerce website that serves as a digital marketplace for  businesses to showcase their products,customers can browse, select, purchase, and even review them.This website is designed to provide a seamless shopping experience",
    TechStack: "MERN stack",
    photo: "/images/ecom.png",
    githubUrl: "https://github.com/ahmedabzk/stunna-electronics",
    websitUrl: "https://stunna-electronics-client.vercel.app/",
  },
];

function Projects() {
  return (
    <section
      className="mt-5 mb-5"
      id="projects"
    >
      <h1 className="text-lg font-semibold text-center mb-4">Projects</h1>
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
