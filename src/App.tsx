import AboutUs from "./components/AboutUs";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="min-h-screen bg-white text-slate-950 antialiased">
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
