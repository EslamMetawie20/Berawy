import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Share2, MessageCircle, Check, Copy } from 'lucide-react';
import { WEDDING_DETAILS } from '../constants/wedding';

export const DressCodeAndActions: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // WhatsApp RSVP Handler
  const handleRsvpWhatsApp = () => {
    if (!WEDDING_DETAILS.rsvpWhatsAppNumber || WEDDING_DETAILS.rsvpWhatsAppNumber.trim() === '') {
      showToast('RSVP contact coming soon.');
      return;
    }

    const encodedMessage = encodeURIComponent(WEDDING_DETAILS.rsvpPrefilledMessage);
    const whatsappUrl = `https://wa.me/${WEDDING_DETAILS.rsvpWhatsAppNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Add to Calendar Handler (.ics generator)
  const handleAddToCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Abdelrahman & Rewan Wedding//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `SUMMARY:${WEDDING_DETAILS.groom} & ${WEDDING_DETAILS.bride} Wedding`,
      `DESCRIPTION:Join ${WEDDING_DETAILS.groom} and ${WEDDING_DETAILS.bride} to celebrate their wedding at Joya Hall!`,
      `LOCATION:${WEDDING_DETAILS.fullLocation}`,
      `DTSTART:${WEDDING_DETAILS.calendarStartUtc}`,
      `DTEND:${WEDDING_DETAILS.calendarEndUtc}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Abdelrahman-and-Rewan-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Calendar event downloaded!');
  };

  // Web Share / Copy Link Handler
  const handleShare = async () => {
    const shareData = {
      title: 'Abdelrahman & Rewan Wedding Invitation',
      text: 'Join us as Abdelrahman & Rewan celebrate their wedding on September 25, 2026 at Joya Hall, Ras El Bar.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or error - fallback to clipboard copy
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('Invitation link copied.');
    });
  };

  const colorSwatches = [
    { label: 'Black', hex: '#000000' },
    { label: 'Charcoal', hex: '#3D3733' },
    { label: 'Champagne', hex: '#F4EAD6' },
    { label: 'Beige', hex: '#EFE9DF' },
    { label: 'Dusty Rose', hex: '#D8B4A6' },
  ];

  return (
    <section
      id="rsvp"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '70px 24px 80px',
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{
              position: 'fixed',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 9999,
              backgroundColor: '#2C2825',
              color: '#FAF7F2',
              padding: '12px 22px',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 500,
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Check size={16} strokeWidth={2} color="#D8B4A6" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '500px', width: '100%' }}
      >
        {/* Dress Code Section */}
        <div style={{ marginBottom: '64px' }}>
          <span
            className="font-sans"
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.3em',
              fontWeight: 500,
              textTransform: 'uppercase',
              color: '#C5A089',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Dress Code
          </span>

          <h3
            className="font-serif"
            style={{
              fontSize: '1.65rem',
              fontWeight: 400,
              color: '#2C2825',
              marginBottom: '8px',
            }}
          >
            Elegant Evening Wear
          </h3>

          <p
            className="font-sans"
            style={{
              fontSize: '0.9rem',
              color: '#5A524C',
              fontWeight: 300,
              marginBottom: '24px',
            }}
          >
            Come dressed to celebrate, dance and make beautiful memories with us.
          </p>

          {/* Neutral Color Swatches */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
            }}
          >
            {colorSwatches.map((swatch, i) => (
              <div
                key={i}
                title={swatch.label}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: swatch.hex,
                  border: swatch.hex === '#F4EAD6' || swatch.hex === '#EFE9DF' ? '1px solid rgba(197, 160, 137, 0.4)' : 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            width: '50px',
            height: '1px',
            backgroundColor: 'rgba(197, 160, 137, 0.4)',
            margin: '0 auto 60px',
          }}
        />

        {/* RSVP Title & Actions */}
        <div>
          <span
            className="font-sans"
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.3em',
              fontWeight: 500,
              textTransform: 'uppercase',
              color: '#C5A089',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Will You Join Us?
          </span>

          <p
            className="font-serif"
            style={{
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: '#5A524C',
              marginBottom: '32px',
            }}
          >
            Your presence would make our day even more special.
          </p>

          {/* Action Buttons Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Primary RSVP Button */}
            <motion.button
              onClick={handleRsvpWhatsApp}
              whileTap={{ scale: 0.98 }}
              className="font-sans"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '16px 24px',
                backgroundColor: '#2C2825',
                color: '#FAF7F2',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(44, 40, 37, 0.12)',
              }}
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              RSVP ON WHATSAPP
            </motion.button>

            {/* Add to Calendar Button */}
            <motion.button
              onClick={handleAddToCalendar}
              whileTap={{ scale: 0.98 }}
              className="font-sans"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '14px 24px',
                backgroundColor: 'transparent',
                color: '#2C2825',
                border: '1px solid rgba(44, 40, 37, 0.3)',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                cursor: 'pointer',
              }}
            >
              <Calendar size={16} strokeWidth={1.5} />
              ADD TO CALENDAR
            </motion.button>

            {/* Share Invitation Button */}
            <motion.button
              onClick={handleShare}
              whileTap={{ scale: 0.98 }}
              className="font-sans"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '14px 24px',
                backgroundColor: 'transparent',
                color: '#5A524C',
                border: '1px dashed rgba(197, 160, 137, 0.5)',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                cursor: 'pointer',
              }}
            >
              <Share2 size={16} strokeWidth={1.5} />
              SHARE INVITATION
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
