import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, VolumeX } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Playback & UI States
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControlsHint, setShowControlsHint] = useState(false);

  // Attempt to play video with audio after user interaction
  const handlePlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    setHasError(false);
    setIsEnded(false);

    try {
      // Primary intent: play with unmuted audio after user gesture
      video.muted = false;
      setIsMuted(false);
      await video.play();
      setIsPlaying(true);
      setHasStarted(true);
    } catch (err) {
      console.warn('Playback with sound was blocked; falling back to muted playback:', err);
      // Fallback: play muted if browser audio policy blocked unmuted playback
      try {
        video.muted = true;
        setIsMuted(true);
        await video.play();
        setIsPlaying(true);
        setHasStarted(true);
      } catch (fallbackErr) {
        console.error('Video playback failed completely:', fallbackErr);
        setHasError(true);
        setIsPlaying(false);
      }
    }
  }, []);

  const handlePause = useCallback(() => {
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  // Toggle playback when tapping on the video
  const handleContainerClick = () => {
    if (!hasStarted) {
      handlePlay();
    } else if (isEnded) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
      handlePlay();
    } else if (isPlaying) {
      handlePause();
      setShowControlsHint(true);
    } else {
      handlePlay();
      setShowControlsHint(false);
    }
  };

  // Keyboard accessibility (Space / Enter)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleContainerClick();
    }
  };

  // Sound toggle (primarily for the muted fallback case)
  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const newMuted = !video.muted;
    video.muted = newMuted;
    setIsMuted(newMuted);
  };

  // Replay handler
  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      handlePlay();
    }
  };

  // Sync state if video pauses/plays via external events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);

      // Keep final frame visible briefly, then smoothly reveal next section if user hasn't scrolled
      setTimeout(() => {
        if (typeof window !== 'undefined' && window.scrollY < 80) {
          const nextSection = document.getElementById('announcement');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 1400);
    };
    const onError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onError);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onError);
    };
  }, []);

  return (
    <section
      id="hero"
      tabIndex={0}
      role="region"
      aria-label="Wedding Video Hero Section"
      onKeyDown={handleKeyDown}
      onClick={handleContainerClick}
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        minHeight: '100dvh',
        overflow: 'hidden',
        backgroundColor: '#1E1B18',
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Cinematic Video */}
      <video
        ref={videoRef}
        playsInline
        preload="metadata"
        poster="/assets/wedding-intro-poster.webp"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 1,
        }}
      >
        <source src="/assets/wedding-intro.mp4" type="video/mp4" />
        Your browser does not support playing this video.
      </video>

      {/* Subtle initial dark overlay prior to playback */}
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            key="pre-play-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.28)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
        )}
      </AnimatePresence>

      {/* Initial Centered Play Button & Caption */}
      <AnimatePresence>
        {!hasStarted && !hasError && (
          <motion.div
            key="play-prompt-ui"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.5, ease: 'easeInOut' } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'auto',
            }}
          >
            {/* Pulsing ambient ring */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.15, 0.35],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                position: 'absolute',
                width: '106px',
                height: '106px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                pointerEvents: 'none',
              }}
            />

            {/* Circular Play Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePlay();
              }}
              aria-label="Play wedding invitation video"
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.22)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255, 255, 255, 0.55)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                cursor: 'pointer',
                outline: 'none',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.06)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.32)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.22)';
              }}
            >
              <Play size={30} fill="#FFFFFF" strokeWidth={0} style={{ marginLeft: '4px' }} />
            </button>

            {/* Subtle "Tap to begin" text */}
            <span
              className="font-sans"
              style={{
                marginTop: '16px',
                fontSize: '0.78rem',
                letterSpacing: '0.28em',
                fontWeight: 500,
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
              }}
            >
              Tap to begin
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Paused state overlay cue if user pauses after starting */}
      <AnimatePresence>
        {hasStarted && !isPlaying && !isEnded && !hasError && showControlsHint && (
          <motion.div
            key="paused-ui"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              <Play size={26} fill="#FFFFFF" strokeWidth={0} style={{ marginLeft: '3px' }} />
            </div>
            <span
              className="font-sans"
              style={{
                marginTop: '12px',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                fontWeight: 400,
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.9)',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
              }}
            >
              Paused
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ended state: subtle replay button and invitation continue prompt */}
      <AnimatePresence>
        {isEnded && !hasError && (
          <motion.div
            key="ended-ui"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              bottom: '36px',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <button
              type="button"
              onClick={handleReplay}
              aria-label="Replay invitation video"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(250, 247, 242, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(216, 180, 166, 0.4)',
                color: '#2C2825',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 500,
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.18)',
              }}
            >
              <RotateCcw size={14} />
              <span>Replay</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discrete Audio Indicator if Muted Fallback Triggered */}
      <AnimatePresence>
        {hasStarted && isMuted && !isEnded && (
          <motion.button
            key="unmute-badge"
            type="button"
            onClick={toggleSound}
            aria-label="Enable sound"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              zIndex: 15,
              padding: '8px 14px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(0, 0, 0, 0.55)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              cursor: 'pointer',
            }}
          >
            <VolumeX size={15} />
            <span>Tap for sound</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Graceful Fallback Error UI */}
      {hasError && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(44, 40, 37, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <p
            className="font-serif"
            style={{
              color: '#FAF7F2',
              fontSize: '1.2rem',
              marginBottom: '18px',
              fontStyle: 'italic',
            }}
          >
            Our wedding story
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePlay();
            }}
            style={{
              padding: '12px 24px',
              borderRadius: '9999px',
              backgroundColor: '#FAF7F2',
              border: 'none',
              color: '#2C2825',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Tap to Play
          </button>
        </div>
      )}

      {/* Soft Bottom Transition Gradient blending into #announcement */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '140px',
          background: 'linear-gradient(to bottom, rgba(250, 247, 242, 0) 0%, rgba(250, 247, 242, 0.6) 60%, rgba(250, 247, 242, 1) 100%)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />
    </section>
  );
};
