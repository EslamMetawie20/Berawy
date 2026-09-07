import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { DiscreetMenu } from './components/DiscreetMenu';
import { FloatingParticles } from './components/FloatingParticles';
import { Hero } from './components/Hero';
import { WeddingAnnouncement } from './components/WeddingAnnouncement';
import { Countdown } from './components/Countdown';
import { Timeline } from './components/Timeline';
import { Venue } from './components/Venue';
import { QuoteAndNames } from './components/QuoteAndNames';
import { DressCodeAndActions } from './components/DressCodeAndActions';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100dvh',
        backgroundColor: '#FAF7F2',
        color: '#2C2825',
        overflowX: 'hidden',
      }}
    >
      {/* Initial Minimal Loading Overlay */}
      <LoadingScreen onComplete={() => setIsLoaded(true)} />

      {/* Single Discreet Floating Menu */}
      <DiscreetMenu />

      {/* Floating Dust/Light Particles (subtle background depth) */}
      <FloatingParticles />

      {/* Main Continuous Single-Page Flow */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Announcement & Date */}
        <WeddingAnnouncement />

        {/* Section 3: Countdown */}
        <Countdown />

        {/* Section 4: Event Timeline */}
        <Timeline />

        {/* Section 5: Location / Venue */}
        <Venue />

        {/* Section 6: Quote & Names */}
        <QuoteAndNames />

        {/* Section 7: Dress Code, RSVP, Calendar & Share */}
        <DressCodeAndActions />

        {/* Section 8: Final Farewell */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
