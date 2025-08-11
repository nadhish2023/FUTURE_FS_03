import HeroSection from './components/sections/HeroSection';
import InfiniteShowcaseSection from './components/sections/InfiniteShowcaseSection';
import LegacySection from './components/sections/LegacySection';
import AnatomySection from './components/sections/AnatomySection';
import CockpitSection from './components/sections/CockpitSection';
import TechSpecsSection from './components/sections/TechSpecsSection';
import CallToActionSection from './components/sections/CallToActionSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InfiniteShowcaseSection />
      <LegacySection />
      <AnatomySection />
      <CockpitSection />
      <TechSpecsSection />
      <CallToActionSection />
    </div>
  );
}