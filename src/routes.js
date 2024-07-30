import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Culinaria from "./Pages/Culinaria";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Festas from "./Pages/Festas";
import Artesanato from "./Pages/Artesanato";
import Turismo from "./Pages/Turismo";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/culinaria" element={<Culinaria />} />
        <Route path="/festas" element={<Festas />} />
        <Route path="/artesanato" element={<Artesanato />} />
        <Route path="/turismo" element={<Turismo />} />
      </Routes>
      <Footer />
    </Router>
  );
}
