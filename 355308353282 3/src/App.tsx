import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Tours from "@/pages/Tours";
import Exhibitions from "@/pages/Exhibitions";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationButton from "@/components/ConsultationButton";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ConsultationButton />
      </div>
    </LanguageProvider>
  );
}
