import React from 'react';
import { motion } from 'framer-motion';

// Clean Cutout Transparent PNG Artwork Motifs
import redFlowersPng from '../assets/red-flowers.png';
import bistroPng from '../assets/bistro-embroidery.png';
import umbrellaPng from '../assets/umbrella-embroidery.png';
import villaPng from '../assets/villa-embroidery.png';

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
        padding: '24px 12px 30px',
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Handcrafted Invitation Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          maxWidth: '430px',
          width: '100%',
          backgroundColor: '#FBF8F3', // Soft woven linen paper
          borderRadius: '24px',
          border: '1px solid rgba(195, 180, 160, 0.5)',
          boxShadow: '0 20px 50px rgba(55, 45, 35, 0.06), 0 2px 10px rgba(55, 45, 35, 0.03)',
          padding: '30px 16px 32px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Parallel Hand-Stitched Side Borders */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '12px',
            width: '5px',
            borderLeft: '2px dashed #758A70', // Sage green embroidered stitch
            borderRight: '1px solid #CAD5C6',
            pointerEvents: 'none',
            opacity: 0.8,
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: '12px',
            width: '5px',
            borderRight: '2px dashed #758A70',
            borderLeft: '1px solid #CAD5C6',
            pointerEvents: 'none',
            opacity: 0.8,
            zIndex: 2,
          }}
        />

        {/* --- 4 Larger & More Prominent Transparent PNG Cutouts --- */}

        {/* Top-Left: Larger Red Flowers Botanical Motif */}
        <img
          src={redFlowersPng}
          alt="Red Flowers Botanical Motif"
          style={{
            position: 'absolute',
            top: '-15px',
            left: '-15px',
            width: '140px',
            height: 'auto',
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'drop-shadow(0 3px 6px rgba(40,30,20,0.07))',
          }}
        />

        {/* Top-Right: Larger Bistro Set Motif */}
        <img
          src={bistroPng}
          alt="Bistro Set Motif"
          style={{
            position: 'absolute',
            top: '8px',
            right: '-12px',
            width: '130px',
            height: 'auto',
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'drop-shadow(0 3px 6px rgba(40,30,20,0.07))',
          }}
        />

        {/* Bottom-Left: Larger Sun Umbrella Motif */}
        <img
          src={umbrellaPng}
          alt="Sun Umbrella Motif"
          style={{
            position: 'absolute',
            bottom: '4px',
            left: '-12px',
            width: '135px',
            height: 'auto',
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'drop-shadow(0 3px 6px rgba(40,30,20,0.07))',
          }}
        />

        {/* Bottom-Right: Larger Villa Motif */}
        <img
          src={villaPng}
          alt="Villa Motif"
          style={{
            position: 'absolute',
            bottom: '4px',
            right: '-12px',
            width: '135px',
            height: 'auto',
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'drop-shadow(0 3px 6px rgba(40,30,20,0.07))',
          }}
        />

        {/* --- Refined & Compact Central Reading Column (Zero Overlap) --- */}

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            position: 'relative',
            zIndex: 3,
            marginTop: '12px',
            marginBottom: '18px',
          }}
        >
          <h2
            className="font-script"
            style={{
              fontSize: 'clamp(2.0rem, 6vw, 2.5rem)',
              fontWeight: 400,
              color: '#1E2C20', // Deep botanical forest green
              lineHeight: 1.05,
              margin: 0,
              textShadow: '0 1px 2px rgba(255,255,255,0.9)',
            }}
          >
            Our Evening
          </h2>

          <div
            style={{
              width: '28px',
              height: '1px',
              backgroundColor: '#B29B80',
              margin: '6px auto 0',
            }}
          />
        </motion.div>

        {/* Event List (Compact Central Column with Clear Separation) */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            width: '100%',
            maxWidth: '220px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '8px',
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
              {/* Event Title (Smaller Calligraphic Script) */}
              <h3
                className="font-script"
                style={{
                  fontSize: 'clamp(1.6rem, 4.8vw, 2.0rem)',
                  fontWeight: 400,
                  color: '#1E2C20',
                  lineHeight: 1.1,
                  margin: '0 0 3px 0',
                }}
              >
                {event.title}
              </h3>

              {/* Event Description (Smaller Editorial Serif) */}
              <p
                className="font-serif"
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  fontWeight: 500,
                  color: '#4F614C',
                  margin: '0 0 3px 0',
                  lineHeight: 1.3,
                  maxWidth: '200px',
                }}
              >
                {event.description}
              </p>

              {/* Event Time Badge (Smaller Sans) */}
              <span
                className="font-sans"
                style={{
                  fontSize: '0.66rem',
                  letterSpacing: '0.18em',
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
                    width: '16px',
                    height: '1px',
                    backgroundColor: 'rgba(178, 155, 128, 0.4)',
                    marginTop: '12px',
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
