import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutSection from "../components/sections/AboutSection";
import AchievementsSection from "../components/sections/AchievementsSection";
import CTASection from "../components/sections/CTASection";
import HeroSection from "../components/sections/HeroSection";
import RecentActivitiesSection from "../components/sections/RecentActivitiesSection";
import TeamSection from "../components/sections/TeamSection";
import VisionMissionSection from "../components/sections/VisionMissionSection";
import WingsSection from "../components/sections/WingsSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = location.hash.replace("#", "");
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(hash);
    if (!el) return;

    const timeout = setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <RecentActivitiesSection />
      <AchievementsSection />
      <VisionMissionSection />
      <WingsSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
