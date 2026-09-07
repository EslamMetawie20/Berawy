import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WEDDING_DETAILS } from '../constants/wedding';

export const Hero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const { scrollY } = useScroll();

  // Subtle parallax effect on scroll
  const videoY = useTransform(scrollY, [0, 600], [0, 150]);
  const contentY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100dvh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 20px',
        backgroundColor: '#2C2825',
      }}
    >
      {/* Background Hero Media with Smooth Parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          y: videoY,
          zIndex: 0,
        }}
      >
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/hero-wedding.webp"
            onError={() => setVideoError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source src="/assets/hero-wedding.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/assets/hero-wedding.webp"
            alt="Abdelrahman & Rewan Wedding"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        )}

        {/* Soft dark vignette overlay only for text legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.45) 100%)',
          }}
        />

        {/* Cinematic gradient fade at bottom blending directly into next ivory section */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '240px',
            background: 'linear-gradient(to bottom, rgba(250, 247, 242, 0) 0%, rgba(250, 247, 242, 0.7) 60%, rgba(250, 247, 242, 1) 100%)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>

      {/* Hero Header Minimal Tag */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          y: contentY,
          opacity,
          textAlign: 'center',
          marginTop: '40px',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span
          className="font-sans"
          style={{
            fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
            fontWeight: 500,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.95)',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
          }}
        >
          Together Forever
        </span>
      </motion.div>

      {/* Hero Center Overlay Image / Subtle Names */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          y: contentY,
          opacity,
          textAlign: 'center',
          maxWidth: '85vw',
          width: '420px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Transparent Overlay PNG if available */}
        <img
          src="/assets/names-overlay.png"
          alt="Abdelrahman & Rewan"
          onError={(e) => {
            // Hide element if file is missing, keeping clean layout
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '180px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.3))',
            backgroundColor: 'transparent',
            marginBottom: '16px',
          }}
        />

        <p
          className="font-sans"
          style={{
            fontSize: 'clamp(0.85rem, 2.8vw, 1.05rem)',
            letterSpacing: '0.15em',
            fontWeight: 300,
            color: 'rgba(255, 255, 255, 0.92)',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.5)',
            margin: 0,
          }}
        >
          Two hearts, one beautiful journey.
        </p>
      </motion.div>

      {/* Hero Bottom Date & Scroll Indicator */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          y: contentY,
          opacity,
          textAlign: 'center',
          marginBottom: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div
          className="font-serif"
          style={{
            fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)',
            letterSpacing: '0.22em',
            color: '#2C2825',
            fontWeight: 400,
          }}
        >
          {WEDDING_DETAILS.dateFormatted.toUpperCase()}
        </div>

        {/* Minimal Scroll Line Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '36px',
            background: 'linear-gradient(to bottom, #2C2825 0%, rgba(44, 40, 37, 0) 100%)',
          }}
        />
      </motion.div>
    </section>
  );
};
