import AboutUs from "./components/AboutUs";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
// Os imports abaixo ficam comentados até que os meninos criem os arquivos
// import Projects from "./components/Projects";
// import ContactUs from "./components/ContactUs";

function App() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* 1. SEÇÃO: INTRODUCTION (Visão Geral e Métricas da Empresa) */}
      <Introduction />

      {/* 1. SEÇÃO: ABOUT US (Sua Task) */}
      <AboutUs />

      {/* 2. SEÇÃO: SERVICES (Task do Ruan Victor) */}
      <Services />

      {/* 3. SEÇÃO: PROJECTS / CASE STUDIES (Task do Rodrigo) */}
      {/* <Projects /> */}

      {/* 4. SEÇÃO: CONTACT US (Task do Hiran) */}
      {/* <ContactUs /> */}
    </main>
  );
}

export default App;