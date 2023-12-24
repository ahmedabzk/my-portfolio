"use client";

import Image from "next/image"
import { useState, useTransition } from "react";
import Button from "./Button";

const ABOUT_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Rust</li>
        <li>Nextjs</li>
        <li>MongoDB</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Nairobi, Nairobi</li>
      </ul>
    ),
  },
];


function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  return (
    <section className="mt-7" id="about">
      <div className="flex flex-col sm:flex-row gap-5">
        <Image
          src="/images/about-image.png"
          alt="about me image"
          width={500}
          height={500}
          className="flex-1 mt-7 object-contain"
        />
        <div className="flex-1 mt-5 w-auto ml-16 flex flex-col">
          <h1 className="text-3xl font-bold dark:text-[#FFFFFF] mt-2">About Me</h1>
          <p className="dark:text-[#ABB5BC] font-medium mt-2">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React,Nextjs, Rust Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <Button selected={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}
              Skills{" "}
            </Button>
            <Button selected={() => handleTabChange("education")} active={tab === "education"}>
              {" "}
              Education{""}
            </Button>
          </div>
          <div className="mt-8">
            {ABOUT_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About