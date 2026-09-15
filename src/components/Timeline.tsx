import React from 'react';
import { motion } from 'framer-motion';

// --- Embroidered Style SVG Motifs inspired by Image 1 ---

// Top-Left: Lemon Branch with Leaves & Pearl Dots
const LemonBranchIllustration: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ style }) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '130px', height: '130px', ...style }}
  >
    {/* Main Stem */}
    <path
      d="M15 15 C 45 35, 70 85, 135 120"
      stroke="#5B7053"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="100"
    />
    <path
      d="M35 30 C 50 15, 80 20, 110 35"
      stroke="#5B7053"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Leaves */}
    <path d="M30 25 C 20 5, 45 2, 50 20 C 42 28, 32 30, 30 25 Z" fill="#6E8B65" stroke="#4A6145" strokeWidth="1.2" />
    <path d="M55 45 C 40 30, 65 25, 75 42 C 68 52, 58 50, 55 45 Z" fill="#587550" stroke="#3D5337" strokeWidth="1.2" />
    <path d="M85 70 C 70 55, 95 50, 105 68 C 98 78, 88 75, 85 70 Z" fill="#6E8B65" stroke="#4A6145" strokeWidth="1.2" />
    <path d="M110 100 C 95 85, 120 80, 130 98 C 123 108, 113 105, 110 100 Z" fill="#587550" stroke="#3D5337" strokeWidth="1.2" />
    <path d="M60 22 C 75 8, 90 20, 82 32 C 72 32, 62 26, 60 22 Z" fill="#7C9A72" stroke="#4A6145" strokeWidth="1.2" />

    {/* Lemons */}
    {/* Lemon 1 */}
    <g transform="translate(42, 38) rotate(-15)">
      <ellipse cx="20" cy="14" rx="16" ry="12" fill="#F4CB43" stroke="#D1A326" strokeWidth="1.5" />
      <path d="M34 14 Q 38 14 36 17" stroke="#D1A326" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="10" r="1.5" fill="#FFF" opacity="0.7" />
      <circle cx="22" cy="16" r="1.2" fill="#FFF" opacity="0.7" />
      <circle cx="26" cy="11" r="1" fill="#FFF" opacity="0.7" />
    </g>
    {/* Lemon 2 */}
    <g transform="translate(85, 42) rotate(25)">
      <ellipse cx="18" cy="13" rx="15" ry="11" fill="#EDBD35" stroke="#C5961B" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="1.5" fill="#FFF" opacity="0.8" />
      <circle cx="18" cy="14" r="1.2" fill="#FFF" opacity="0.8" />
    </g>
    {/* Lemon 3 */}
    <g transform="translate(18, 65) rotate(40)">
      <ellipse cx="16" cy="12" rx="14" ry="10" fill="#F4CB43" stroke="#D1A326" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="1.3" fill="#FFF" opacity="0.7" />
    </g>

    {/* Pearl Accents (French Knots) */}
    <circle cx="28" cy="22" r="2.5" fill="#FFFFFF" stroke="#D5CBB9" strokeWidth="0.8" />
    <circle cx="72" cy="38" r="2.5" fill="#FFFFFF" stroke="#D5CBB9" strokeWidth="0.8" />
    <circle cx="102" cy="62" r="2.5" fill="#FFFFFF" stroke="#D5CBB9" strokeWidth="0.8" />
    <circle cx="48" cy="62" r="2" fill="#FFFFFF" stroke="#D5CBB9" strokeWidth="0.8" />
    <circle cx="82" cy="88" r="2" fill="#FFFFFF" stroke="#D5CBB9" strokeWidth="0.8" />
  </svg>
);

// Top-Right: Bistro Set with Drink
const BistroSetIllustration: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    viewBox="0 0 140 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '115px', height: '115px', ...style }}
  >
    {/* Table Base */}
    <path d="M70 70 L70 115 M55 115 L85 115 M60 115 L70 100 L80 115" stroke="#7A6855" strokeWidth="2" strokeLinecap="round" />
    {/* Table Top */}
    <ellipse cx="70" cy="70" rx="24" ry="6" fill="#FAF6EE" stroke="#A8947D" strokeWidth="2" />
    
    {/* Cocktail Glass on Table */}
    <path d="M68 64 L74 64 L71 68 L71 70 M69 70 L73 70" stroke="#D97736" strokeWidth="1.2" fill="none" />
    <path d="M69 64 L73 64 L71 67 Z" fill="#E67E22" />
    <circle cx="74" cy="63" r="1.5" fill="#F1C40F" />

    {/* Left Chair */}
    <g transform="translate(22, 50)">
      {/* Backrest */}
      <path d="M12 20 C 12 5, 28 5, 28 20 L28 40 L12 40 Z" fill="#E6D3BC" stroke="#9E8063" strokeWidth="1.5" />
      {/* Wicker Weave texture */}
      <path d="M16 12 L24 12 M15 18 L25 18 M15 24 L25 24" stroke="#BD9E7A" strokeWidth="1" />
      {/* Seat */}
      <ellipse cx="20" cy="40" rx="10" ry="4" fill="#D4BBA0" stroke="#9E8063" strokeWidth="1.5" />
      {/* Legs */}
      <path d="M12 42 L8 65 M28 42 L32 65 M16 42 L18 62 M24 42 L22 62" stroke="#7A6855" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Right Chair */}
    <g transform="translate(80, 50)">
      <path d="M12 20 C 12 5, 28 5, 28 20 L28 40 L12 40 Z" fill="#E6D3BC" stroke="#9E8063" strokeWidth="1.5" />
      <path d="M16 12 L24 12 M15 18 L25 18 M15 24 L25 24" stroke="#BD9E7A" strokeWidth="1" />
      <ellipse cx="20" cy="40" rx="10" ry="4" fill="#D4BBA0" stroke="#9E8063" strokeWidth="1.5" />
      <path d="M12 42 L8 65 M28 42 L32 65 M16 42 L18 62 M24 42 L22 62" stroke="#7A6855" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

// Bottom-Left: Striped Sun Umbrella & Lounge Chair
const SunChairIllustration: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    viewBox="0 0 150 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '120px', height: '104px', ...style }}
  >
    {/* Umbrella Pole */}
    <path d="M55 25 L55 110" stroke="#8C7A6B" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Umbrella Canopy */}
    <path d="M20 40 Q 55 10 90 40 Z" fill="#75A3A3" stroke="#4D7373" strokeWidth="1.5" />
    {/* Stripes */}
    <path d="M34 32 Q 55 10 55 40 Z" fill="#FAF6EE" opacity="0.9" />
    <path d="M68 30 Q 55 10 76 36 Z" fill="#FAF6EE" opacity="0.9" />
    {/* Scalloped Pearl Edge */}
    <circle cx="20" cy="40" r="2" fill="#FFF" stroke="#CBD5D5" strokeWidth="0.8" />
    <circle cx="34" cy="42" r="2" fill="#FFF" stroke="#CBD5D5" strokeWidth="0.8" />
    <circle cx="48" cy="43" r="2" fill="#FFF" stroke="#CBD5D5" strokeWidth="0.8" />
    <circle cx="62" cy="43" r="2" fill="#FFF" stroke="#CBD5D5" strokeWidth="0.8" />
    <circle cx="76" cy="42" r="2" fill="#FFF" stroke="#CBD5D5" strokeWidth="0.8" />
    <circle cx="90" cy="40" r="2" fill="#FFF" stroke="#CBD5D5" strokeWidth="0.8" />

    {/* Lounge Chair */}
    <g transform="translate(45, 65)">
      {/* Wooden Frame */}
      <path d="M10 40 L70 30 L85 15" stroke="#9C7A5B" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 40 L18 52 M55 33 L53 48 M75 22 L82 35" stroke="#7A5C40" strokeWidth="2.5" strokeLinecap="round" />
      {/* Cushioned Striped Mat */}
      <path d="M12 37 L68 28 L82 14" stroke="#75A3A3" strokeWidth="4" strokeLinecap="round" />
      <path d="M12 37 L68 28 L82 14" stroke="#FAF6EE" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
    </g>
  </svg>
);

// Bottom-Right: Coastal Villa & Cypress Trees
const VillaCypressIllustration: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    viewBox="0 0 160 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '135px', height: '110px', ...style }}
  >
    {/* Sea Water Waves */}
    <path d="M10 110 Q 40 100 80 112 T 150 108 L160 130 L0 130 Z" fill="#7BB3C9" opacity="0.75" />
    <path d="M25 118 Q 65 110 105 120 T 150 115" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
    
    {/* Shoreline Rocks / Hill */}
    <path d="M40 110 C 60 90, 100 92, 155 105 L160 130 L30 130 Z" fill="#D1C4B0" stroke="#A89882" strokeWidth="1" />

    {/* Villa Building */}
    <g transform="translate(60, 52)">
      {/* Main Structure */}
      <rect x="15" y="20" width="45" height="30" fill="#FAF4EA" stroke="#B09B82" strokeWidth="1.2" />
      <rect x="42" y="10" width="25" height="40" fill="#F4E8D6" stroke="#B09B82" strokeWidth="1.2" />
      {/* Terracotta Roofs */}
      <polygon points="12,20 38,8 63,20" fill="#D96B43" stroke="#B54F2B" strokeWidth="1" />
      <polygon points="39,10 55,2 70,10" fill="#C45A33" stroke="#9E3F1F" strokeWidth="1" />
      {/* Windows */}
      <rect x="22" y="26" width="6" height="9" rx="3" fill="#6B5947" />
      <rect x="34" y="26" width="6" height="9" rx="3" fill="#6B5947" />
      <rect x="48" y="18" width="6" height="9" rx="3" fill="#6B5947" />
      <rect x="58" y="18" width="6" height="9" rx="3" fill="#6B5947" />
    </g>

    {/* Cypress Trees */}
    {/* Tree 1 */}
    <path d="M42 100 C 35 70, 36 35, 45 25 C 54 35, 55 70, 48 100 Z" fill="#3B5E35" stroke="#254020" strokeWidth="1.2" />
    <path d="M45 25 L45 100" stroke="#2A4824" strokeWidth="0.8" />
    {/* Tree 2 */}
    <path d="M125 105 C 118 75, 120 40, 128 30 C 136 40, 138 75, 131 105 Z" fill="#2E4D29" stroke="#1C3318" strokeWidth="1.2" />
    {/* Tree 3 */}
    <path d="M140 108 C 134 85, 135 55, 142 45 C 148 55, 149 85, 144 108 Z" fill="#3B5E35" stroke="#254020" strokeWidth="1" />
  </svg>
);

export const Timeline: React.FC = () => {
  // Current Website Data ONLY
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
        padding: '60px 16px 80px',
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Main Luxury Embroidered Invitation Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          maxWidth: '480px',
          width: '100%',
          backgroundColor: '#FBF8F3', // Warm linen cream backdrop
          borderRadius: '24px',
          border: '1px solid rgba(206, 192, 173, 0.5)',
          boxShadow: '0 18px 45px rgba(60, 50, 40, 0.06), 0 2px 10px rgba(60, 50, 40, 0.03)',
          padding: '56px 28px 64px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Fabric Stitch Pattern Backdrop Lines on Left & Right Sides */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '16px',
            width: '8px',
            borderLeft: '2px dashed #8F9E89', // Sage green embroidered stitch
            borderRight: '1px solid #CBD5C6',
            pointerEvents: 'none',
            opacity: 0.85,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: '16px',
            width: '8px',
            borderRight: '2px dashed #8F9E89',
            borderLeft: '1px solid #CBD5C6',
            pointerEvents: 'none',
            opacity: 0.85,
          }}
        />

        {/* 4 Corner Embroidery Illustrations */}
        {/* Top-Left: Lemon Branch */}
        <div
          style={{
            position: 'absolute',
            top: '-8px',
            left: '-6px',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        >
          <LemonBranchIllustration />
        </div>

        {/* Top-Right: Bistro Set */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            right: '-4px',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        >
          <BistroSetIllustration />
        </div>

        {/* Bottom-Left: Sun Chair */}
        <div
          style={{
            position: 'absolute',
            bottom: '-4px',
            left: '-6px',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        >
          <SunChairIllustration />
        </div>

        {/* Bottom-Right: Villa & Cypress */}
        <div
          style={{
            position: 'absolute',
            bottom: '-4px',
            right: '-6px',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        >
          <VillaCypressIllustration />
        </div>

        {/* Card Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            position: 'relative',
            zIndex: 4,
            marginBottom: '42px',
            marginTop: '20px',
          }}
        >
          <h2
            className="font-script"
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 3.8rem)',
              fontWeight: 400,
              color: '#283629', // Deep botanical green script
              lineHeight: 1.1,
              margin: 0,
              textShadow: '0 1px 2px rgba(255,255,255,0.8)',
            }}
          >
            Our Evening
          </h2>

          <div
            style={{
              width: '45px',
              height: '1px',
              backgroundColor: '#A89278',
              margin: '12px auto 0',
            }}
          />
        </motion.div>

        {/* Stacked Event Blocks */}
        <div
          style={{
            position: 'relative',
            zIndex: 4,
            width: '100%',
            maxWidth: '340px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            marginBottom: '30px',
          }}
        >
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Event Title (Calligraphic Script) */}
              <h3
                className="font-script"
                style={{
                  fontSize: 'clamp(2.2rem, 6.5vw, 2.9rem)',
                  fontWeight: 400,
                  color: '#243225',
                  lineHeight: 1.15,
                  margin: '0 0 6px 0',
                }}
              >
                {event.title.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
              </h3>

              {/* Event Description (Clean Serif) */}
              <p
                className="font-serif"
                style={{
                  fontSize: '0.88rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: '#556353',
                  margin: '0 0 6px 0',
                  lineHeight: 1.4,
                  maxWidth: '280px',
                }}
              >
                {event.description}
              </p>

              {/* Event Time (Warm Gold / Champagne Badge) */}
              <span
                className="font-sans"
                style={{
                  fontSize: '0.76rem',
                  letterSpacing: '0.22em',
                  fontWeight: 600,
                  color: '#8A6E46',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}
              >
                {event.time === '8:00 PM' && 'AT 8:00 PM'}
                {event.time === '10:30 PM' && 'AT 10:30 PM'}
                {event.time === 'CONTINUES' && 'UNTIL LATE'}
              </span>

              {/* Decorative Subtle Line separator between items */}
              {idx < events.length - 1 && (
                <div
                  style={{
                    width: '24px',
                    height: '1px',
                    backgroundColor: 'rgba(168, 146, 120, 0.35)',
                    marginTop: '32px',
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
