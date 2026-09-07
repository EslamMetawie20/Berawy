import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { WEDDING_DETAILS } from '../constants/wedding';

export const Venue: React.FC = () => {
  return (
    <section
      id="venue"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '70px 24px 80px',
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '520px', width: '100%' }}
      >
        <span
          className="font-sans"
          style={{
            fontSize: '0.8rem',
            letterSpacing: '0.3em',
            fontWeight: 500,
            textTransform: 'uppercase',
            color: '#C5A089',
            display: 'block',
            marginBottom: '12px',
          }}
        >
          The Location
        </span>

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2rem, 6vw, 2.8rem)',
            fontWeight: 400,
            letterSpacing: '0.08em',
            color: '#2C2825',
            marginBottom: '8px',
          }}
        >
          {WEDDING_DETAILS.venueName}
        </h2>

        <p
          className="font-serif"
          style={{
            fontSize: '1.2rem',
            fontWeight: 300,
            color: '#5A524C',
            marginBottom: '4px',
          }}
        >
          {WEDDING_DETAILS.venueSub}
        </p>

        <p
          className="font-sans"
          style={{
            fontSize: '0.92rem',
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: '#80766E',
            marginBottom: '28px',
          }}
        >
          {WEDDING_DETAILS.venueLocation}
        </p>

        <p
          className="font-serif"
          style={{
            fontSize: '1.05rem',
            fontStyle: 'italic',
            color: '#C5A089',
            marginBottom: '36px',
          }}
        >
          A beautiful place for the beginning of our forever.
        </p>

        {/* Minimalist Map Card Illustration */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '180px',
            borderRadius: '16px',
            backgroundColor: '#EFE9DF',
            border: '1px solid rgba(216, 180, 166, 0.4)',
            overflow: 'hidden',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(44, 40, 37, 0.03)',
          }}
        >
          {/* Subtle SVG Grid / Map lines background */}
          <svg
            width="100%"
            height="100%"
            style={{ position: 'absolute', inset: 0, opacity: 0.25 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2C2825" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Water / Coastline aesthetic stroke */}
            <path
              d="M -20 120 Q 120 40 280 140 T 500 80"
              fill="none"
              stroke="#C5A089"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FAF7F2',
                border: '1px solid #C5A089',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(44, 40, 37, 0.1)',
                color: '#C5A089',
              }}
            >
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <span
              className="font-sans"
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: '#2C2825',
                marginTop: '8px',
                backgroundColor: 'rgba(250, 247, 242, 0.9)',
                padding: '4px 10px',
                borderRadius: '10px',
              }}
            >
              Joya Hall
            </span>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            width: '100%',
          }}
        >
          {/* Primary CTA */}
          <motion.a
            href={WEDDING_DETAILS.googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.98 }}
            className="font-sans"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: '100%',
              padding: '16px 24px',
              backgroundColor: '#2C2825',
              color: '#FAF7F2',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              boxShadow: '0 6px 20px rgba(44, 40, 37, 0.12)',
            }}
          >
            <MapPin size={18} strokeWidth={1.5} />
            VIEW LOCATION
            <ExternalLink size={14} style={{ opacity: 0.7 }} />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href={WEDDING_DETAILS.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.98 }}
            className="font-sans"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: '100%',
              padding: '14px 24px',
              backgroundColor: 'transparent',
              color: '#2C2825',
              border: '1px solid rgba(44, 40, 37, 0.3)',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            <Navigation size={16} strokeWidth={1.5} />
            GET DIRECTIONS
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
