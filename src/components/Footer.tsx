import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DETAILS } from '../constants/wedding';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '90px 24px 80px',
        backgroundColor: '#FDFBF7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderTop: '1px solid rgba(216, 180, 166, 0.25)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9 }}
        style={{ maxWidth: '480px', width: '100%' }}
      >
        <span
          className="font-sans"
          style={{
            fontSize: '0.82rem',
            letterSpacing: '0.35em',
            fontWeight: 600,
            textTransform: 'uppercase',
            color: '#C5A089',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          See You There
        </span>

        <h2
          className="font-script"
          style={{
            fontSize: 'clamp(2.6rem, 8vw, 4.2rem)',
            fontWeight: 400,
            color: '#2C2825',
            lineHeight: 1.2,
            marginBottom: '12px',
          }}
        >
          {WEDDING_DETAILS.coupleNames}
        </h2>

        <p
          className="font-serif"
          style={{
            fontSize: '1.25rem',
            letterSpacing: '0.2em',
            color: '#5A524C',
            marginBottom: '40px',
          }}
        >
          {WEDDING_DETAILS.dateFormatted}
        </p>

        {/* Subtle Line & Sign-off */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            className="font-serif"
            style={{
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: '#80766E',
            }}
          >
            With love,
          </span>

          <span
            className="font-serif"
            style={{
              fontSize: '1.5rem',
              letterSpacing: '0.25em',
              fontWeight: 500,
              color: '#2C2825',
            }}
          >
            {WEDDING_DETAILS.monogram}
          </span>

          {/* Animated Heart / Flourish Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              width: '80px',
              height: '1px',
              backgroundColor: '#C5A089',
              marginTop: '16px',
              transformOrigin: 'center',
            }}
          />
        </div>
      </motion.div>
    </footer>
  );
};
