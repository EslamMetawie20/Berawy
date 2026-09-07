import React from 'react';
import { motion } from 'framer-motion';

export const Timeline: React.FC = () => {
  const events = [
    {
      time: '8:00 PM',
      title: 'ZAFFA',
      description: 'The celebration begins.',
    },
    {
      time: '10:30 PM',
      title: 'REST',
      description: 'A little pause before the celebration continues.',
    },
    {
      time: 'CONTINUES',
      title: 'CELEBRATION CONTINUES',
      description: 'Music, laughter and memories to last forever.',
    },
  ];

  return (
    <section
      id="timeline"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '70px 24px 80px',
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          maxWidth: '500px',
          width: '100%',
          marginBottom: '50px',
        }}
      >
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.4rem)',
            fontWeight: 400,
            letterSpacing: '0.15em',
            color: '#2C2825',
            textTransform: 'uppercase',
          }}
        >
          Our Evening
        </h2>
        <div
          style={{
            width: '40px',
            height: '1px',
            backgroundColor: '#C5A089',
            margin: '16px auto 0',
          }}
        />
      </motion.div>

      {/* Vertical Timeline Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '460px',
          width: '100%',
          paddingLeft: '32px',
        }}
      >
        {/* Continuous Central Vertical Line */}
        <div
          style={{
            position: 'absolute',
            left: '7px',
            top: '12px',
            bottom: '12px',
            width: '1px',
            backgroundColor: 'rgba(216, 180, 166, 0.4)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.18 }}
              style={{ position: 'relative' }}
            >
              {/* Minimal Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '6px',
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  backgroundColor: '#FAF7F2',
                  border: '1.5px solid #C5A089',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: '#C5A089',
                  }}
                />
              </div>

              {/* Time Label */}
              <span
                className="font-sans"
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.25em',
                  fontWeight: 600,
                  color: '#C5A089',
                  display: 'block',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                }}
              >
                {event.time}
              </span>

              {/* Title */}
              <h3
                className="font-serif"
                style={{
                  fontSize: '1.35rem',
                  letterSpacing: '0.1em',
                  fontWeight: 500,
                  color: '#2C2825',
                  marginBottom: '6px',
                }}
              >
                {event.title}
              </h3>

              {/* Description */}
              <p
                className="font-sans"
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: '#5A524C',
                  margin: 0,
                }}
              >
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
