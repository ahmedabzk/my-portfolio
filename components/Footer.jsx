import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border-t z-10 border-t-slate-300 dark:border-t-slate-50 border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src="/images/logo1.jpg"
            alt="logo"
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
