import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, FastForward, Maximize2, Minimize2, ShieldCheck } from 'lucide-react';

/**
 * =============================================================================
 * AVNIET MANAGEMENT SYSTEM - FULL-SCREEN CINEMATIC 3D LOGO INTRO
 * =============================================================================
 * Role in System Architecture:
 * - Part of the "College Automation" & Institutional Brand Presentation pipeline.
 * - Plays the ultra-high clarity 1080p 60fps 3D emblem video in true Edge-to-Edge
 *   Full Screen format (100vw x 100vh) without restrictive borders or containers.
 * - Features browser Fullscreen API toggle, sound controls, smooth progress bar,
 *   and keyboard shortcut skip handling (Esc / Space).
 * =============================================================================
 */
export const LogoIntro = ({ onComplete }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Exact target video duration: 4.6 seconds
  const VIDEO_DURATION_MS = 4600;

  // Gracefully finish intro and transition to portal
  const handleFinish = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      // Exit browser fullscreen if active
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      if (onComplete) onComplete();
    }, 400);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay video
    video.play()
      .catch(() => {
        // Fallback: enforce muted autoplay
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {
          setTimeout(handleFinish, 1200);
        });
      });

    // Time update listener for progress bar
    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleFinish);

    // Safety timeout (4.9s) guarantees zero UI hang
    const fallbackTimer = setTimeout(handleFinish, VIDEO_DURATION_MS + 300);

    // Fullscreen change listener
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Keyboard controls: Escape or Space to skip immediately
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.code === 'Space') {
        e.preventDefault();
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleFinish);
      clearTimeout(fallbackTimer);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Toggle audio mute/unmute
  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  // Toggle browser native fullscreen
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        if (containerRef.current?.requestFullscreen) {
          await containerRef.current.requestFullscreen();
          setIsFullscreen(true);
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    } catch {
      // Browser permissions fallback
    }
  };

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 w-screen h-screen overflow-hidden bg-[#D7D8DB] select-none font-sans"
        >
          {/* ========================================================================= */}
          {/* TRUE FULL-SCREEN 1080p 60fps 3D EMBLEM VIDEO LAYER (EDGE-TO-EDGE 100vw x 100vh) */}
          {/* ========================================================================= */}
          <video
            ref={videoRef}
            src="./avn-3d-logo.mp4"
            poster="./avn-3d-logo-poster.jpg"
            autoPlay
            muted={isMuted}
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none filter contrast-[1.01] brightness-[1.00]"
          />

          {/* ========================================================================= */}
          {/* FLOATING CINEMATIC HEADS-UP DISPLAY (HUD) OVERLAYS */}
          {/* ========================================================================= */}

          {/* Top Floating Control Bar */}
          <div className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-8 py-5 flex items-center justify-between pointer-events-auto">
            {/* Left Brand Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/20 text-white shadow-lg">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase">
                AVNIET • Autonomous
              </span>
            </div>

            {/* Right Interactive Controls */}
            <div className="flex items-center gap-2.5">
              {/* Native Fullscreen Toggle Button */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-2.5 rounded-full bg-slate-900/40 hover:bg-slate-900/70 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Native Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Sound Toggle Button */}
              <button
                type="button"
                onClick={toggleSound}
                className="p-2.5 rounded-full bg-slate-900/40 hover:bg-slate-900/70 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Skip Intro Button */}
              <button
                type="button"
                onClick={handleFinish}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/25 transition-all cursor-pointer shadow-xl hover:scale-105 active:scale-95"
              >
                <span>Skip Intro</span>
                <FastForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline-block text-[10px] text-slate-300 font-mono ml-1 px-1.5 py-0.5 bg-white/20 rounded">
                  ESC
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Floating Subtitle Badge */}
          <div className="absolute bottom-6 left-0 right-0 z-30 px-4 flex flex-col items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-5 py-2 rounded-2xl bg-slate-900/45 backdrop-blur-md border border-white/20 text-center shadow-2xl max-w-lg"
            >
              <h2 className="text-sm sm:text-base font-black text-white tracking-wide uppercase">
                AVN Institute of Engineering & Technology
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-200 font-medium mt-0.5">
                UGC Autonomous • Accredited by NAAC & NBA • Affiliated to JNTUH
              </p>
            </motion.div>
          </div>

          {/* Edge-to-Edge Progress Bar Running Along Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 z-40 h-1.5 bg-black/20">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-400 transition-all duration-75 ease-linear shadow-[0_0_12px_rgba(59,130,246,0.8)]"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoIntro;
