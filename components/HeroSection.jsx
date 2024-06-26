"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


function HeroSection() {
  return (
    <section className="lg:py-16 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="dark:text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Ahmed", 1000, "fullstack Developer", 1000, "Rust dev", 1000, "web3 dev", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="dark:text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a detail-oriented software developer with 2 years of experience
            in delivering high-quality code and collaborating effectively with
            cross- functional teams. I have a solid background in computer
            science and knowledge of various programming languages, development
            tools, and methodologies. I excel at problem-solving and am
            committed to staying up-to-date with technological advancements. My
            goal is to apply my skills to contribute to cutting-edge software
            projects and improve the software development process.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mt-2">
            <Image
              src="/images/photo6.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection