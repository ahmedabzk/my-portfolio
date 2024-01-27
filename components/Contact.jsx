"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Contact() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
   const handleSubmit = async (e) => {
     e.preventDefault();
     const data = {
       email: e.target.email.value,
       subject: e.target.subject.value,
       message: e.target.message.value,
     };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: "POST",
          // Tell the server we're sending JSON.
          headers: {
            "Content-Type": "application/json",
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
          console.log("Message sent.");
          setEmailSubmitted(true);
          setTimeout(() => {
            setEmailSubmitted(false);
          },2000)
        }
   };
  
  
  return (
    <section className="mt-12 flex flex-col sm:flex-row w-full" id="contact">
      <div className="mb-4 mt-10 flex-1">
        <h1 className="text-2xl font-bold dark:text-[#FFFFFF]">
          Let&apos;s Connect
        </h1>
        <p className="text-slate-600 dark:text-[#ABB5BC] font-medium">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="mt-5 flex gap-4">
          <Link href="https://github.com/ahmedabzk">
            <FaGithub className="w-16 h-16" />
          </Link>
          <Link href="https://www.linkedin.com/in/ahmedabzk">
            <FaLinkedin className="w-16 h-16" />
          </Link>
        </div>
      </div>
      {emailSubmitted ? (
        <p className="text-green-500 text-lg mt-2">Email sent successfully!</p>
      ) : (
        <form className="flex-1" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-lg font-semibold">Your email</label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="p-3 rounded-lg border w-full text-slate-950 bg-slate-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Just saying hi"
              className="p-3 rounded-lg border w-full text-slate-950 bg-slate-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold">Message</label>
            <textarea
              type="text"
              id="message"
              placeholder="Let's talk..."
              className="p-3 rounded-lg border w-full text-slate-950 bg-slate-300"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-green-800 uppercase border rounded-lg text-center p-3 w-full"
          >
            send message
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact