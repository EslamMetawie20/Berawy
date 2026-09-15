import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';

interface HeroProps {
  onEnded?: () => void;
  onStartAudio?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnded: onEndedProp, onStartAudio: onStartAudioProp }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Playback & UI States
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showControlsHint, setShowControlsHint] = useState(false);

  // Strict scroll lock while video has not completed (hasEnded === false)
  useEffect(() => {
    if (!hasEnded) {
      // Save existing inline styles
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalHtmlOverscroll = document.documentElement.style.overscrollBehavior;
      const originalBodyOverflow = document.body.style.overflow;
      const originalBodyOverscroll = document.body.style.overscrollBehavior;
      const originalBodyTouchAction = document.body.style.touchAction;

      // Lock scrolling on html and body
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.overscrollBehavior = 'none';
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'none';
      document.body.style.touchAction = 'none';

      // Prevent wheel scrolling
      const preventWheel = (e: WheelEvent) => {
        e.preventDefault();
      };

      // Prevent touch scroll dragging on mobile
      const preventTouch = (e: TouchEvent) => {
        // Prevent default touch movement to avoid dragging page under hero
        e.preventDefault();
      };

      // Prevent keyboard navigation scrolling
      const preventKeys = (e: KeyboardEvent) => {
        const scrollKeys = [
          'ArrowUp',
          'ArrowDown',
          'PageUp',
          'PageDown',
          'Home',
          'End',
          ' ',
          'Space',
        ];
        if (scrollKeys.includes(e.key)) {
          e.preventDefault();
        }
      };

      window.addEventListener('wheel', preventWheel, { passive: false });
      window.addEventListener('touchmove', preventTouch, { passive: false });
      window.addEventListener('keydown', preventKeys, { passive: false });

      // Keep viewport pinned to the top
      window.scrollTo(0, 0);

      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.documentElement.style.overscrollBehavior = originalHtmlOverscroll;
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.overscrollBehavior = originalBodyOverscroll;
        document.body.style.touchAction = originalBodyTouchAction;

        window.removeEventListener('wheel', preventWheel);
        window.removeEventListener('touchmove', preventTouch);
        window.removeEventListener('keydown', preventKeys);
      };
    }
  }, [hasEnded]);

  // Start video (permanently muted) and trigger persistent background wedding audio at exact same user interaction
  const handlePlay = useCallback(async () => {
    // 1. Immediately start persistent background wedding audio from user interaction
    if (onStartAudioProp) {
      onStartAudioProp();
    }

    const video = videoRef.current;
    if (!video) return;

    setHasError(false);

    try {
      // Intro video must ALWAYS remain completely muted; its original audio must NEVER be heard
      video.muted = true;
      await video.play();
      setIsPlaying(true);
      setHasStarted(true);
    } catch (err) {
      console.error('Intro video playback failed:', err);
      setHasError(true);
      setIsPlaying(false);
    }
  }, [onStartAudioProp]);

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
    } else if (hasEnded) {
      // Video has ended, scrolling is unlocked; do not restart video
      return;
    } else if (isPlaying) {
      handlePause();
      setShowControlsHint(true);
    } else {
      handlePlay();
      setShowControlsHint(false);
    }
  };

  // Keyboard accessibility on hero region
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleContainerClick();
    }
  };

  // Fallback continue to invitation when video cannot play
  const handleContinueToInvitation = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasEnded(true);
    if (onEndedProp) {
      onEndedProp();
    }
  };

  // Video event synchronization
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVideoEnd = () => {
      setIsPlaying(false);
      setHasEnded(true);
      if (onEndedProp) {
        onEndedProp();
      }
    };
    const onError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onVideoEnd);
    video.addEventListener('error', onError);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onVideoEnd);
      video.removeEventListener('error', onError);
    };
  }, [onEndedProp]);

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
        maxWidth: '430px',
        height: '100svh',
        minHeight: '100dvh',
        overflow: 'hidden',
        backgroundColor: '#1E1B18',
        margin: '0 auto',
        cursor: hasEnded ? 'default' : 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Cinematic Video - Initially paused, no autoplay, permanently muted */}
      <video
        ref={videoRef}
        muted={true}
        playsInline
        preload="metadata"
        poster={`${import.meta.env.BASE_URL}assets/wedding-intro-poster.webp`}
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
        <source src={`${import.meta.env.BASE_URL}assets/wedding-intro.mp4`} type="video/mp4" />
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

            {/* Subtle "TAP TO BEGIN" text */}
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
              TAP TO BEGIN
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Paused state cue if paused during playback */}
      <AnimatePresence>
        {hasStarted && !isPlaying && !hasEnded && !hasError && showControlsHint && (
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

      {/* Ended state: final frame visible and natural scroll cue */}
      <AnimatePresence>
        {hasEnded && !hasError && (
          <motion.div
            key="ended-controls-ui"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              bottom: '32px',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pointerEvents: 'none',
            }}
          >
            {/* Subtle natural scroll prompt */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                color: '#2C2825',
              }}
            >
              <span
                className="font-sans"
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  opacity: 0.8,
                }}
              >
                Scroll to explore
              </span>
              <ChevronDown size={16} style={{ opacity: 0.7 }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Graceful Fallback Error UI with Continue button to prevent trapping user */}
      {hasError && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(44, 40, 37, 0.82)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            padding: '24px',
            textAlign: 'center',
            gap: '16px',
          }}
        >
          <p
            className="font-serif"
            style={{
              color: '#FAF7F2',
              fontSize: '1.25rem',
              maxWidth: '320px',
              lineHeight: 1.5,
              fontStyle: 'italic',
            }}
          >
            Unable to play the invitation video.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={handleContinueToInvitation}
              style={{
                padding: '12px 24px',
                borderRadius: '9999px',
                backgroundColor: '#FAF7F2',
                border: 'none',
                color: '#2C2825',
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              }}
            >
              Continue to Invitation
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePlay();
              }}
              style={{
                padding: '12px 20px',
                borderRadius: '9999px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(250, 247, 242, 0.6)',
                color: '#FAF7F2',
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Soft Bottom Transition Gradient blending into lower section */}
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

