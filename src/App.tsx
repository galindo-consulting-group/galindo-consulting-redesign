import AboutUs from "./components/AboutUs";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Nav />
      {/* 1. SEÇÃO: INTRODUCTION (Visão Geral e Métricas da Empresa) */}
      <Introduction />

      {/* 1. SEÇÃO: ABOUT US (Sua Task) */}
      <AboutUs />

      {/* 3. SEÇÃO: PROJECTS / CASE STUDIES (Task do Rodrigo) */}
      <Projects />

      {/* 2. SEÇÃO: SERVICES (Task do Ruan Victor) */}
      <Services />

      {/* 4. SEÇÃO: CONTACT US (Task do Hiran) */}
      <ContactUs />
    </main>
  );
}

export default App;
