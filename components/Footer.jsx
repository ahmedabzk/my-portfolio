import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-slate-800 border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          src="/images/logo-transparent.png"
          alt="logo"
          width={70}
          height={70}
          className="rounded-full object-cover"
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
