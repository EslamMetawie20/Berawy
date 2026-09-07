import React from 'react';
import { motion } from 'framer-motion';

export const WeddingAnnouncement: React.FC = () => {
  return (
    <section
      id="announcement"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '80px 24px 60px',
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: '540px',
          width: '100%',
        }}
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
            marginBottom: '20px',
          }}
        >
          The Day We Say I Do
        </span>

        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.25rem, 4vw, 1.65rem)',
            lineHeight: 1.6,
            fontWeight: 300,
            color: '#2C2825',
            margin: '0 auto 48px',
            maxWidth: '440px',
            fontStyle: 'italic',
          }}
        >
          With love in our hearts, we invite you to celebrate the beginning of our forever.
        </p>

        {/* Editorial Date Block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '36px 24px',
            backgroundColor: '#FDFBF7',
            borderRadius: '16px',
            border: '1px solid rgba(216, 180, 166, 0.3)',
            boxShadow: '0 10px 35px rgba(44, 40, 37, 0.03)',
          }}
        >
          <span
            className="font-sans"
            style={{
              fontSize: '0.9rem',
              letterSpacing: '0.35em',
              fontWeight: 600,
              color: '#80766E',
              marginBottom: '4px',
            }}
          >
            FRIDAY
          </span>

          <span
            className="font-serif"
            style={{
              fontSize: 'clamp(3.8rem, 12vw, 5.5rem)',
              lineHeight: 1,
              fontWeight: 300,
              color: '#2C2825',
              margin: '8px 0',
            }}
          >
            25
          </span>

          <span
            className="font-sans"
            style={{
              fontSize: '1rem',
              letterSpacing: '0.35em',
              fontWeight: 500,
              color: '#C5A089',
              marginBottom: '4px',
            }}
          >
            SEPTEMBER
          </span>

          <span
            className="font-sans"
            style={{
              fontSize: '0.9rem',
              letterSpacing: '0.25em',
              fontWeight: 400,
              color: '#5A524C',
            }}
          >
            2026
          </span>
        </div>
      </motion.div>
    </section>
  );
};
