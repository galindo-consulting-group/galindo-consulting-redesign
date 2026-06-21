import AboutUs from "./components/AboutUs";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

function App() {
  useRevealOnScroll();

  return (
    <main className="min-h-screen bg-[#07080c] text-slate-100 antialiased">
      <NavBar />
      <Introduction />
      <AboutUs />
      <Projects />
      <Services />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
