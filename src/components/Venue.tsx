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
        padding: '24px 14px 30px',
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '100%',
          maxWidth: '430px',
          position: 'relative',
        }}
      >
        {/* Outer Fabric Invitation Card */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#F7F3EC',
            backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), url("${import.meta.env.BASE_URL}assets/embroidery-linen.png")`,
            backgroundSize: '16px 16px, auto',
            borderRadius: '24px',
            border: '1px solid rgba(200, 185, 165, 0.5)',
            boxShadow: '0 16px 40px rgba(44, 38, 30, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)',
            padding: '24px 18px 24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Subtle Hand-Stitched Dashed Inner Border */}
          <div
            style={{
              position: 'absolute',
              inset: '12px',
              border: '1px dashed rgba(165, 145, 120, 0.35)',
              borderRadius: '16px',
              pointerEvents: 'none',
            }}
          />

          {/* Top Decorative Embroidery Elements */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '4px',
              marginTop: '-10px',
              padding: '0 4px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Top Left: Embroidered Villa Cutout */}
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              src={`${import.meta.env.BASE_URL}assets/embroidery-villa.png`}
              alt="Mediterranean Villa Embroidery"
              style={{
                width: '125px',
                height: 'auto',
                maxHeight: '100px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.05))',
                backgroundColor: 'transparent',
              }}
            />

            {/* Top Right: Vintage Key Cutout */}
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              src={`${import.meta.env.BASE_URL}assets/embroidery-key.png`}
              alt="Vintage Key Embroidery"
              style={{
                width: '85px',
                height: 'auto',
                maxHeight: '95px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.05))',
                backgroundColor: 'transparent',
                marginTop: '4px',
              }}
            />
          </div>

          {/* Center Main Invitation Text */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              marginTop: '2px',
              marginBottom: '14px',
              maxWidth: '340px',
            }}
          >
            {/* Script Calligraphy Section Title */}
            <h3
              className="font-serif"
              style={{
                fontSize: '2.1rem',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#1E3A2B',
                lineHeight: 1.1,
                marginBottom: '6px',
                letterSpacing: '0.02em',
              }}
            >
              The Location
            </h3>

            {/* Main Venue Name */}
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(1.9rem, 6vw, 2.4rem)',
                fontWeight: 500,
                letterSpacing: '0.06em',
                color: '#1E3A2B',
                marginBottom: '4px',
                lineHeight: 1.2,
              }}
            >
              {WEDDING_DETAILS.venueName}
            </h2>

            {/* Sub-venue / Club Name */}
            <p
              className="font-sans"
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#4A584E',
                marginBottom: '4px',
              }}
            >
              {WEDDING_DETAILS.venueSub}
            </p>

            {/* City / Address */}
            <p
              className="font-sans"
              style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#6B776E',
                marginBottom: '12px',
              }}
            >
              {WEDDING_DETAILS.venueLocation}
            </p>

            {/* Romantic Sentimental Sentence */}
            <p
              className="font-serif"
              style={{
                fontSize: '1rem',
                fontStyle: 'italic',
                color: '#8C6D52',
                lineHeight: 1.4,
                margin: '0 auto',
                maxWidth: '290px',
              }}
            >
              A beautiful place for the beginning of our forever.
            </p>
          </div>

          {/* Realistic Wedding Hall Venue Photo Card */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '190px',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '20px',
              border: '1px solid rgba(195, 175, 150, 0.5)',
              boxShadow: '0 8px 24px rgba(44, 38, 30, 0.08)',
              zIndex: 2,
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/joya-hall.jpg`}
              alt="Joya Hall Wedding Venue Interior"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
            {/* Subtle soft vignette overlay for elegance */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.15) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              width: '100%',
              marginBottom: '16px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Primary Action: VIEW LOCATION */}
            <motion.a
              href={WEDDING_DETAILS.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              whileHover={{ backgroundColor: '#294B3A' }}
              className="font-sans"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                padding: '15px 20px',
                backgroundColor: '#1E3A2B',
                color: '#FAF7F2',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                boxShadow: '0 6px 18px rgba(30, 58, 43, 0.16)',
                transition: 'background-color 0.2s ease',
              }}
            >
              <MapPin size={17} strokeWidth={1.6} />
              VIEW LOCATION
              <ExternalLink size={13} style={{ opacity: 0.7 }} />
            </motion.a>

            {/* Secondary Action: GET DIRECTIONS */}
            <motion.a
              href={WEDDING_DETAILS.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              whileHover={{ backgroundColor: 'rgba(30, 58, 43, 0.05)' }}
              className="font-sans"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                padding: '13px 20px',
                backgroundColor: 'transparent',
                color: '#1E3A2B',
                border: '1.5px solid #1E3A2B',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'background-color 0.2s ease',
              }}
            >
              <Navigation size={15} strokeWidth={1.6} />
              GET DIRECTIONS
            </motion.a>
          </div>

          {/* Bottom Decorative Element: Transparent Embroidered Compass Cutout */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '4px',
            }}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={`${import.meta.env.BASE_URL}assets/embroidery-compass.png`}
              alt="Embroidered Compass Rose Cutout"
              style={{
                width: '120px',
                height: 'auto',
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.06))',
                backgroundColor: 'transparent',
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

