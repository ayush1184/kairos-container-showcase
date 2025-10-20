import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Models from "@/components/Models";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to specific section when navigating from model pages
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80; // Account for navbar height
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure page is rendered
    }
  }, [location.state]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Models />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
