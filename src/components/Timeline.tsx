import React from 'react';
import { motion } from 'framer-motion';

export const Timeline: React.FC = () => {
  // Website Event Content (Strictly Preserved)
  const events = [
    {
      time: 'AT 8:00 PM',
      title: 'Zaffa',
      description: 'THE CELEBRATION BEGINS.',
    },
    {
      time: 'AT 10:30 PM',
      title: 'Rest',
      description: 'A LITTLE PAUSE BEFORE THE CELEBRATION CONTINUES.',
    },
    {
      time: 'UNTIL LATE',
      title: 'Celebration Continues',
      description: 'MUSIC, LAUGHTER AND MEMORIES TO LAST FOREVER.',
    },
  ];

  return (
    <section
      id="timeline"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '50px 12px 70px',
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Luxury Handcrafted Embroidered Invitation Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          maxWidth: '440px',
          width: '100%',
          backgroundColor: '#F7F3EB', // Warm woven linen paper
          borderRadius: '20px',
          border: '1px solid rgba(195, 180, 160, 0.65)',
          boxShadow: '0 20px 50px rgba(55, 45, 35, 0.08), 0 2px 8px rgba(55, 45, 35, 0.04)',
          padding: '48px 20px 52px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Parallel Hand-Stitched Fabric Borders */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '14px',
            width: '6px',
            borderLeft: '2px dashed #758A70', // Sage green embroidered stitch
            borderRight: '1px solid #CAD5C6',
            pointerEvents: 'none',
            opacity: 0.85,
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: '14px',
            width: '6px',
            borderRight: '2px dashed #758A70',
            borderLeft: '1px solid #CAD5C6',
            pointerEvents: 'none',
            opacity: 0.85,
            zIndex: 2,
          }}
        />

        {/* --- High-Detail Hand-Embroidered Corner Illustrations --- */}

        {/* Top-Left: Lush Lemon Branch */}
        <img
          src="/assets/lemon-embroidery.jpg"
          alt="Embroidered Lemon Branch"
          style={{
            position: 'absolute',
            top: '-20px',
            left: '-25px',
            width: '175px',
            height: '175px',
            objectFit: 'cover',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.95,
          }}
        />

        {/* Top-Right: Bistro Set & Drinks */}
        <img
          src="/assets/bistro-embroidery.jpg"
          alt="Embroidered Bistro Set"
          style={{
            position: 'absolute',
            top: '12px',
            right: '-15px',
            width: '145px',
            height: '145px',
            objectFit: 'cover',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.92,
          }}
        />

        {/* Bottom-Left: Striped Sun Umbrella & Lounge Chair */}
        <img
          src="/assets/umbrella-embroidery.jpg"
          alt="Embroidered Sun Umbrella & Lounger"
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '-12px',
            width: '155px',
            height: '155px',
            objectFit: 'cover',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.92,
          }}
        />

        {/* Bottom-Right: Coastal Villa & Cypress Trees */}
        <img
          src="/assets/villa-embroidery.jpg"
          alt="Embroidered Coastal Villa"
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '-12px',
            width: '155px',
            height: '155px',
            objectFit: 'cover',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.92,
          }}
        />

        {/* --- Center Invitation Content --- */}

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            position: 'relative',
            zIndex: 3,
            marginTop: '16px',
            marginBottom: '32px',
          }}
        >
          <h2
            className="font-script"
            style={{
              fontSize: 'clamp(2.8rem, 8.5vw, 3.8rem)',
              fontWeight: 400,
              color: '#213024', // Deep botanical forest green
              lineHeight: 1.05,
              margin: 0,
              textShadow: '0 1px 2px rgba(255,255,255,0.9)',
            }}
          >
            Our Evening
          </h2>

          <div
            style={{
              width: '35px',
              height: '1px',
              backgroundColor: '#B29B80',
              margin: '10px auto 0',
            }}
          />
        </motion.div>

        {/* Event List (Unified Stacked Invitation Card Style) */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            width: '100%',
            maxWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '28px',
            marginBottom: '20px',
          }}
        >
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.12 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              {/* Event Title (Calligraphic Script) */}
              <h3
                className="font-script"
                style={{
                  fontSize: 'clamp(2.1rem, 6.2vw, 2.7rem)',
                  fontWeight: 400,
                  color: '#213024',
                  lineHeight: 1.1,
                  margin: '0 0 4px 0',
                }}
              >
                {event.title}
              </h3>

              {/* Event Description (Editorial Serif) */}
              <p
                className="font-serif"
                style={{
                  fontSize: '0.82rem',
                  letterSpacing: '0.16em',
                  fontWeight: 500,
                  color: '#4F614C',
                  margin: '0 0 4px 0',
                  lineHeight: 1.35,
                  maxWidth: '260px',
                }}
              >
                {event.description}
              </p>

              {/* Event Time Badge */}
              <span
                className="font-sans"
                style={{
                  fontSize: '0.74rem',
                  letterSpacing: '0.2em',
                  fontWeight: 600,
                  color: '#917449',
                  textTransform: 'uppercase',
                }}
              >
                {event.time}
              </span>

              {/* Delicate Gold Separator Line */}
              {idx < events.length - 1 && (
                <div
                  style={{
                    width: '20px',
                    height: '1px',
                    backgroundColor: 'rgba(178, 155, 128, 0.4)',
                    marginTop: '24px',
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
