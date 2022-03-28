import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Home;
