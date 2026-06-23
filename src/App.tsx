import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import HowWeWork from "./components/HowWeWork";
import IndustryFocus from "./components/IndustryFocus";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Results from "./components/Results";
import Services from "./components/Services";
import TechnologyStack from "./components/TechnologyStack";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

function App() {
  useRevealOnScroll();

  return (
    <main className="min-h-screen text-[#06315f] antialiased">
      <NavBar />
      <Introduction />
      <AboutUs />
      <Projects />
      <Results />
      <IndustryFocus />
      <Services />
      <TechnologyStack />
      <HowWeWork />
      <Testimonials />
      <Gallery />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;





