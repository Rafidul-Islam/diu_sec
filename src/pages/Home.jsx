import { useEffect } from "react";
import AboutSection from "../components/sections/AboutSection";
import AchievementsSection from "../components/sections/AchievementsSection";
import CTASection from "../components/sections/CTASection";
import HeroSection from "../components/sections/HeroSection";
import RecentActivitiesSection from "../components/sections/RecentActivitiesSection";
import TeamSection from "../components/sections/TeamSection";
import VisionMissionSection from "../components/sections/VisionMissionSection";
import WingsSection from "../components/sections/WingsSection";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash.substring(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

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
