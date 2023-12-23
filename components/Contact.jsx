import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Contact() {
  return (
    <section className="mt-12 flex flex-col sm:flex-row w-full" id="contact">
      <div className="mb-4 mt-10 flex-1">
        <h1 className="text-2xl font-bold text-[#FFFFFF]">
          Let&apos;s Connect
        </h1>
        <p className="text-[#ABB5BC] font-medium">
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
      <div className="flex-1">
        <div className="flex flex-col">
          <label className="text-lg font-semibold">Your email</label>
          <input
            type="email"
            id="email"
            placeholder="stunna@gmail.com"
            className="p-3 rounded-lg border w-full bg-slate-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Just saying hi"
            className="p-3 rounded-lg border w-full bg-slate-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold">Message</label>
          <textarea
            type="text"
            id="message"
            placeholder="Let's talk..."
            className="p-3 rounded-lg border w-full bg-slate-300"
          />
        </div>
        <button className="mt-4 bg-green-800 uppercase border rounded-lg text-center p-3 w-full">
          send message
        </button>
      </div>
    </section>
  );
}

export default Contact