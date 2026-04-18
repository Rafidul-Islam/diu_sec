import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Magazine from "./pages/Magazine";
import WingPage from "./pages/WingPage";
import NotFound from "./pages/NotFound";
import { RegistrationForm } from "./pages/RegistrationForm";
import { Analytics } from "@vercel/analytics/next";

function AppContent() {
  //

  return (
    <div className={` bg-white dark:bg-slate-950`}>
      <Navbar />
      <main className="bg-white dark:bg-slate-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/wing/:wingId" element={<WingPage />} />
          <Route path="/registration-form" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />

      <Analytics></Analytics>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
