import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { WEDDING_DETAILS } from '../constants/wedding';

export const DiscreetMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Discreet floating trigger button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
        whileTap={{ scale: 0.92 }}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 900,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(250, 247, 242, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(216, 180, 166, 0.3)',
          color: '#2C2825',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(44, 40, 37, 0.08)',
        }}
      >
        {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
      </motion.button>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 899,
              backgroundColor: 'rgba(250, 247, 242, 0.96)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 24px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              style={{ textAlign: 'center', width: '100%', maxWidth: '360px' }}
            >
              <div
                className="font-serif"
                style={{
                  fontSize: '2rem',
                  letterSpacing: '0.15em',
                  color: '#2C2825',
                  marginBottom: '40px',
                }}
              >
                {WEDDING_DETAILS.monogram}
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <button
                  onClick={() => scrollTo('hero')}
                  className="font-serif"
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    letterSpacing: '0.1em',
                    color: '#2C2825',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}
                >
                  Invitation
                </button>
                <button
                  onClick={() => scrollTo('announcement')}
                  className="font-serif"
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    letterSpacing: '0.1em',
                    color: '#2C2825',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}
                >
                  The Date
                </button>
                <button
                  onClick={() => scrollTo('timeline')}
                  className="font-serif"
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    letterSpacing: '0.1em',
                    color: '#2C2825',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}
                >
                  Our Evening
                </button>
                <button
                  onClick={() => scrollTo('venue')}
                  className="font-serif"
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    letterSpacing: '0.1em',
                    color: '#2C2825',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}
                >
                  The Venue
                </button>
                <button
                  onClick={() => scrollTo('rsvp')}
                  className="font-serif"
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    letterSpacing: '0.1em',
                    color: '#2C2825',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}
                >
                  RSVP
                </button>
              </nav>

              <div
                style={{
                  width: '40px',
                  height: '1px',
                  backgroundColor: '#C5A089',
                  margin: '40px auto 0',
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
