import AboutUs from "./components/AboutUs";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <NavBar />
      {/* 1. SEÇÃO: INTRODUCTION (Visão Geral e Métricas da Empresa) */}
      <Introduction />

      {/* 2. SEÇÃO: ABOUT US (Sua Task) */}
      <AboutUs />

      {/* 3. SEÇÃO: PROJECTS / CASE STUDIES (Task do Rodrigo) */}
      <Projects />

      {/* 4. SEÇÃO: SERVICES (Task do Ruan Victor) */}
      <Services />

      {/* 5. SEÇÃO: CONTACT US (Task do Hiran) */}
      <ContactUs />

      {/* 6. SEÇÃO: FOOTER (Task do Ruan)*/}
      <Footer />
    </main>
  );
}

export default App;
