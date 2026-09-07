import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DETAILS } from '../constants/wedding';

export const QuoteAndNames: React.FC = () => {
  return (
    <section
      id="quote-and-names"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '90px 24px 90px',
        backgroundColor: '#FDFBF7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Quote Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
        style={{
          maxWidth: '520px',
          width: '100%',
          marginBottom: '80px',
        }}
      >
        <blockquote
          className="font-serif"
          style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.5,
            color: '#2C2825',
            margin: 0,
          }}
        >
          “And suddenly, all the love songs were about you.”
        </blockquote>
      </motion.div>

      {/* Subtle Divider Line */}
      <div
        style={{
          width: '60px',
          height: '1px',
          backgroundColor: '#C5A089',
          marginBottom: '70px',
        }}
      />

      {/* Names Display Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <span
          className="font-sans"
          style={{
            fontSize: '0.78rem',
            letterSpacing: '0.3em',
            fontWeight: 500,
            textTransform: 'uppercase',
            color: '#80766E',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          The Beginning of Forever
        </span>

        {/* Couple Calligraphic Names */}
        <h2
          className="font-script"
          style={{
            fontSize: 'clamp(2.8rem, 9vw, 4.8rem)',
            fontWeight: 400,
            color: '#2C2825',
            lineHeight: 1.15,
            margin: '0 0 16px 0',
          }}
        >
          {WEDDING_DETAILS.bride}
          <span
            style={{
              display: 'block',
              fontSize: '0.65em',
              color: '#C5A089',
              margin: '2px 0',
            }}
          >
            &amp;
          </span>
          {WEDDING_DETAILS.groom}
        </h2>

        <div
          className="font-serif"
          style={{
            fontSize: '1.25rem',
            letterSpacing: '0.25em',
            color: '#5A524C',
            fontWeight: 400,
            marginTop: '8px',
          }}
        >
          {WEDDING_DETAILS.dateShort}
        </div>
      </motion.div>
    </section>
  );
};
