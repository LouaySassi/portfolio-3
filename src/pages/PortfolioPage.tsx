import { ContactSection } from '../components/portfolio/ContactSection';
import { DocKnockSection } from '../components/portfolio/DocKnockSection';
import { IdentityHero } from '../components/portfolio/IdentityHero';
import { JourneySection } from '../components/portfolio/JourneySection';
import { WorkSection } from '../components/portfolio/WorkSection';
import { LegacyHashRedirect } from '../components/LegacyHashRedirect';

export function PortfolioPage() {
  return (
    <main className="w-full max-w-shell px-5 sm:px-8 lg:px-10">
      <LegacyHashRedirect />
      <IdentityHero />
      <DocKnockSection />
      <WorkSection />
      <JourneySection />
      <ContactSection />
    </main>
  );
}
