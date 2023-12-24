import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import TeckStack from "@/components/TeckStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />

      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <TeckStack />
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
