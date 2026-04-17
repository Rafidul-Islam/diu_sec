import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Magazine from "./pages/Magazine";
import WingPage from "./pages/WingPage";
import NotFound from "./pages/NotFound";

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "dark" : ""} bg-white dark:bg-slate-950`}>
      <Navbar mode={theme} setMode={toggleTheme} />
      <main className="bg-white dark:bg-slate-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/wing/:wingId" element={<WingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
