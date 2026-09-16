import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DETAILS } from '../constants/wedding';
import framePng from '../assets/frame.png';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export const WeddingAnnouncement: React.FC = () => {
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
      id="announcement"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '30px 14px 30px',
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Container sizing based on frame.png (1122 x 1402 ratio) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          maxWidth: '430px',
          width: '100%',
          aspectRatio: '1122 / 1402',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0',
          overflow: 'hidden',
        }}
      >
        {/* User's Exact Frame Image (frame.png) */}
        <img
          src={framePng}
          alt="Wedding Frame"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* --- Inner Space Inside frame.png --- */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            width: '68%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '10px',
          }}
        >
          {/* ONLY 1: Invitation Sentence */}
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(0.92rem, 3.2vw, 1.2rem)',
              lineHeight: 1.55,
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#2C2825',
              margin: '0 0 14px 0',
              maxWidth: '260px',
            }}
          >
            With love in our hearts, we invite you to celebrate the beginning of our forever.
          </p>

          {/* Delicate Divider Line */}
          <div
            style={{
              width: '24px',
              height: '1px',
              backgroundColor: 'rgba(178, 155, 128, 0.5)',
              marginBottom: '14px',
            }}
          />

          {/* ONLY 2: Live Countdown Timer */}
          <div style={{ width: '100%', maxWidth: '270px' }}>
            {timeLeft.isPassed ? (
              <h3
                className="font-script"
                style={{
                  fontSize: 'clamp(1.8rem, 6vw, 2.6rem)',
                  color: '#213024',
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                Our Forever Has Begun
              </h3>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '6px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Days */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(1.4rem, 4.4vw, 1.95rem)',
                      fontWeight: 700,
                      color: '#2C2825',
                      lineHeight: 1,
                    }}
                  >
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span
                    className="font-sans"
                    style={{
                      fontSize: '0.62rem',
                      letterSpacing: '0.18em',
                      color: '#917449',
                      marginTop: '4px',
                      textTransform: 'uppercase',
                      fontWeight: 700,
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
                      fontSize: 'clamp(1.4rem, 4.4vw, 1.95rem)',
                      fontWeight: 700,
                      color: '#2C2825',
                      lineHeight: 1,
                    }}
                  >
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span
                    className="font-sans"
                    style={{
                      fontSize: '0.62rem',
                      letterSpacing: '0.18em',
                      color: '#917449',
                      marginTop: '4px',
                      textTransform: 'uppercase',
                      fontWeight: 700,
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
                      fontSize: 'clamp(1.4rem, 4.4vw, 1.95rem)',
                      fontWeight: 700,
                      color: '#2C2825',
                      lineHeight: 1,
                    }}
                  >
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span
                    className="font-sans"
                    style={{
                      fontSize: '0.62rem',
                      letterSpacing: '0.18em',
                      color: '#917449',
                      marginTop: '4px',
                      textTransform: 'uppercase',
                      fontWeight: 700,
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
                      fontSize: 'clamp(1.4rem, 4.4vw, 1.95rem)',
                      fontWeight: 700,
                      color: '#2C2825',
                      lineHeight: 1,
                    }}
                  >
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span
                    className="font-sans"
                    style={{
                      fontSize: '0.62rem',
                      letterSpacing: '0.18em',
                      color: '#917449',
                      marginTop: '4px',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}
                  >
                    Seconds
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
