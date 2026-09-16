import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, Globe, Mail } from 'lucide-react';
import { WEDDING_DETAILS } from '../constants/wedding';

interface DiscreetMenuProps {
  enabled?: boolean;
}

export const DiscreetMenu: React.FC<DiscreetMenuProps> = ({ enabled = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!enabled) {
      setShowMenuButton(false);
      return;
    }
    return scrollY.on('change', (latest) => {
      setShowMenuButton(enabled && latest > 240);
    });
  }, [scrollY, enabled]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Invitation', id: 'hero' },
    { label: 'The Date', id: 'announcement' },
    { label: 'Our Evening', id: 'timeline' },
    { label: 'The Venue', id: 'venue' },
    { label: 'RSVP', id: 'rsvp' },
  ];

  return (
    <>
      {/* Discreet floating trigger button - only visible once scrolled past opening video */}
      <AnimatePresence>
        {showMenuButton && (
          <motion.button
            key="menu-trigger-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            whileTap={{ scale: 0.92 }}
            style={{
              position: 'fixed',
              top: '20px',
              right: 'max(16px, calc(50% - 215px + 16px))',
              zIndex: 900,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(250, 247, 242, 0.88)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(216, 180, 166, 0.35)',
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
        )}
      </AnimatePresence>

      {/* Fullscreen Overlay - aligned with 430px mobile canvas on desktop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              maxWidth: '430px',
              zIndex: 899,
              backgroundColor: 'rgba(250, 247, 242, 0.97)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 24px',
              boxShadow: '0 0 50px rgba(44, 40, 37, 0.1)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.08, duration: 0.35 }}
              style={{
                textAlign: 'center',
                width: '100%',
                maxWidth: '360px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Top Monogram */}
              <div
                className="font-serif"
                style={{
                  fontSize: '2.1rem',
                  letterSpacing: '0.15em',
                  color: '#2C2825',
                  marginBottom: '32px',
                }}
              >
                {WEDDING_DETAILS.monogram}
              </div>

              {/* Main Wedding Navigation */}
              <nav
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="font-serif"
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.4rem',
                      letterSpacing: '0.12em',
                      color: '#2C2825',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C5A089')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#2C2825')}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Delicate Separator */}
              <div
                style={{
                  width: '36px',
                  height: '1px',
                  backgroundColor: 'rgba(197, 160, 137, 0.4)',
                  margin: '32px auto 24px',
                }}
              />

              {/* Discreet Developer Contact Section */}
              <div
                className="font-sans"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.64rem',
                    letterSpacing: '0.28em',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: '#C5A089',
                    marginBottom: '2px',
                  }}
                >
                  CONTACT
                </span>

                <a
                  href="https://metawie.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    fontWeight: 600,
                    color: '#8C7A6B',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2C2825')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8C7A6B')}
                >
                  <Globe size={11} strokeWidth={1.6} style={{ opacity: 0.7 }} />
                  METAWIE
                </a>

                <a
                  href="mailto:eslammetawie@gmail.com"
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.06em',
                    color: '#A89B8F',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2C2825')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A89B8F')}
                >
                  <Mail size={11} strokeWidth={1.6} style={{ opacity: 0.7 }} />
                  eslammetawie@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
