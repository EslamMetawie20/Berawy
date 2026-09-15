import React, { useState, useRef, useCallback } from 'react';
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
  const [hasEnded, setHasEnded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Triggered on the exact same user tap on the play button
  const startBackgroundAudio = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      if (audio.paused) {
        audio.play().catch((err) => {
          console.warn('Background wedding audio playback blocked:', err);
        });
      }
    }
  }, []);

  return (
    <div className="app-viewport">
      {/* Dedicated Persistent Background Wedding Audio - Lives at App root, never unmounts, loops indefinitely */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}assets/wedding-audio.mp3`}
        loop
        preload="auto"
      />

      {/* Floating Dust/Light Particles across canvas and background */}
      <FloatingParticles />

      {/* Discreet Floating Menu (docked to mobile canvas on desktop) */}
      <DiscreetMenu enabled={hasEnded} />

      {/* Central Narrow Mobile Invitation Canvas (max-width: 430px) */}
      <div className="mobile-canvas">
        <main>
          {/* Section 1: Hero */}
          <Hero
            onStartAudio={startBackgroundAudio}
            onEnded={() => setHasEnded(true)}
          />

          {/* Lower page content: locked and revealed only after opening video finishes */}
          <div
            id="invitation-content"
            style={{
              opacity: hasEnded ? 1 : 0,
              transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
              pointerEvents: hasEnded ? 'auto' : 'none',
            }}
          >
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
