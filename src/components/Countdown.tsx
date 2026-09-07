import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DETAILS } from '../constants/wedding';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const targetDate = new Date(WEDDING_DETAILS.targetIsoDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isPassed: false,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="countdown"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '40px 24px 70px',
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Subtle Separator Line */}
      <div
        style={{
          width: '50px',
          height: '1px',
          backgroundColor: 'rgba(197, 160, 137, 0.4)',
          marginBottom: '50px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '640px' }}
      >
        {timeLeft.isPassed ? (
          <h2
            className="font-script"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.2rem)',
              color: '#2C2825',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Our Forever Has Begun
          </h2>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Days */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.2rem, 7vw, 3.8rem)',
                  fontWeight: 300,
                  color: '#2C2825',
                  lineHeight: 1,
                }}
              >
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span
                className="font-sans"
                style={{
                  fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
                  letterSpacing: '0.25em',
                  color: '#C5A089',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Days
              </span>
            </div>

            {/* Hours */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.2rem, 7vw, 3.8rem)',
                  fontWeight: 300,
                  color: '#2C2825',
                  lineHeight: 1,
                }}
              >
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span
                className="font-sans"
                style={{
                  fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
                  letterSpacing: '0.25em',
                  color: '#C5A089',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.2rem, 7vw, 3.8rem)',
                  fontWeight: 300,
                  color: '#2C2825',
                  lineHeight: 1,
                }}
              >
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span
                className="font-sans"
                style={{
                  fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
                  letterSpacing: '0.25em',
                  color: '#C5A089',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Minutes
              </span>
            </div>

            {/* Seconds */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.2rem, 7vw, 3.8rem)',
                  fontWeight: 300,
                  color: '#2C2825',
                  lineHeight: 1,
                }}
              >
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span
                className="font-sans"
                style={{
                  fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
                  letterSpacing: '0.25em',
                  color: '#C5A089',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Seconds
              </span>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};
