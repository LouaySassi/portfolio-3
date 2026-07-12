import { CapabilitiesSection } from '../components/portfolio/CapabilitiesSection';
import { ContactSection } from '../components/portfolio/ContactSection';
import { IdentityHero } from '../components/portfolio/IdentityHero';
import { JourneySection } from '../components/portfolio/JourneySection';
import { PhilosophySection } from '../components/portfolio/PhilosophySection';
import { RecognitionSection } from '../components/portfolio/RecognitionSection';
import { WorkSection } from '../components/portfolio/WorkSection';
import { LegacyHashRedirect } from '../components/LegacyHashRedirect';

export function PortfolioPage() {
  return (
    <main className="w-full max-w-editorial px-4 sm:px-6 md:px-8">
      <LegacyHashRedirect />
      <IdentityHero />
      <PhilosophySection />
      <RecognitionSection />
      <WorkSection />
      <JourneySection />
      <CapabilitiesSection />
      <ContactSection />
    </main>
  );
}
