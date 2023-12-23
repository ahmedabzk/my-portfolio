"use client";

import { useEffect, useState } from "react";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa6";
import { FaRust } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { LiaNode } from "react-icons/lia";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";



function TeckStack() {
  return (
    <section className="mt-16 flex flex-col items-center" id="teck-stack">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-[#B5B5B5] text-4xl">My Tech Stack</h1>
        <p className="text-[#ECECEC] font-semibold text-2xl">
          Technologies I’ve been working with recently
        </p>
      </div>
      <div className="container mt-12 mb-10 flex justify-center items-center flex-wrap gap-5">
        <FaHtml5 className="w-16 h-16 text-[#E44F26]" />
        <SiTailwindcss className="w-16 h-16 text-[#44A8B3]" />
        <IoLogoJavascript className="w-16 h-16 text-[#F5DE19]" />
        <FaReact className="w-16 h-16 text-[#00D8FF]" />
        <SiRedux className="w-16 h-16 text-[#764ABC]" />
        <BsBootstrapFill className="w-16 h-16 text-[#563D7C]" />
        <FaGitAlt className="w-16 h-16 text-[#DE4C36]" />
        <FaRust className="w-16 h-16" />
        <FaGithub className="w-16 h-16" />
        <LiaNode className="w-20 h-20 text-green-600" />
        <SiMysql className="w-20 h-20 text-[#E78E00]" />
        <SiMongodb className="w-20 h-20 text-[#54B542]" />
        <SiNextdotjs className="w-20 h-20 text-[#FFFFFF]" />
      </div>
    </section>
  );
}

export default TeckStack