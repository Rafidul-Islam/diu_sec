import AboutSection from "../components/sections/AboutSection";
import AchievementsSection from "../components/sections/AchievementsSection";
import CTASection from "../components/sections/CTASection";
import HeroSection from "../components/sections/HeroSection";
import RecentActivitiesSection from "../components/sections/RecentActivitiesSection";
import TeamSection from "../components/sections/TeamSection";
import VisionMissionSection from "../components/sections/VisionMissionSection";
import WingsSection from "../components/sections/WingsSection";

export default function Home() {
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
