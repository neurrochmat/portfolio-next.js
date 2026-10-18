"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Music, Disc3, Minimize2, Maximize2, SkipForward } from "lucide-react";

export function NuclearPlayerBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorTimerRef = useRef<NodeJS.Timeout | null>(null);

  const playlist = [
    { title: "Decoupled Beats (Laravel x Next.js)", duration: "3:42", genre: "Synthwave / Lo-Fi" },
    { title: "Edge Inference (Sub-50ms TFLite)", duration: "2:58", genre: "Chiptune Ambient" },
    { title: "Production Groove (Azure VM & Reverb)", duration: "4:15", genre: "Cyber Electro" }
  ];

  const currentTrack = playlist[currentTrackIndex];

  // Synthesize a chill ambient chiptune chord sequence using Web Audio API
  const playAmbientNote = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      if (isMuted) return;

      const pentatonicScales = [
        [261.63, 329.63, 392.00, 523.25], // C major
        [220.00, 261.63, 329.63, 440.00], // A minor
        [174.61, 220.00, 261.63, 349.23], // F major
        [196.00, 246.94, 293.66, 392.00]  // G major
      ];

      const chord = pentatonicScales[Math.floor(Math.random() * pentatonicScales.length)];
      const noteFreq = chord[Math.floor(Math.random() * chord.length)];

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(noteFreq, ctx.currentTime);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.8);
    } catch {
      // AudioContext not supported or blocked by user policy
    }
  };

  useEffect(() => {
    if (isPlaying) {
      playAmbientNote();
      oscillatorTimerRef.current = setInterval(playAmbientNote, 1200);
    } else {
      if (oscillatorTimerRef.current) {
        clearInterval(oscillatorTimerRef.current);
      }
    }

    return () => {
      if (oscillatorTimerRef.current) {
        clearInterval(oscillatorTimerRef.current);
      }
    };
  }, [isPlaying, isMuted, currentTrackIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-[calc(100vw-2rem)] select-none">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="nuclear-btn bg-primary text-primary-foreground flex items-center gap-2 py-2 px-3 text-xs shadow-[3px_3px_0px_var(--shadow-color)]"
        >
          <Disc3 className={`h-4 w-4 ${isPlaying ? "animate-spin" : ""}`} />
          <span>Nuclear Deck</span>
          <Maximize2 className="h-3.5 w-3.5 ml-1" />
        </button>
      ) : (
        <div className="nuclear-card bg-muted text-foreground p-3 md:p-3.5 w-80 md:w-96 shadow-[5px_5px_0px_var(--shadow-color)]">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b-2 border-border pb-2 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="inline-block p-1 bg-primary border-2 border-border rounded text-primary-foreground">
                <Music className="h-3.5 w-3.5" />
              </span>
              <span className="font-heading font-black text-xs uppercase tracking-wider">
                Nuclear Player Deck
              </span>
              <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-accent-green text-foreground border border-border">
                {isPlaying ? "LIVE" : "IDLE"}
              </span>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-muted-foreground hover:text-foreground p-1 transition-colors"
              title="Minimize Player"
              aria-label="Minimize Player"
            >
              <Minimize2 className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Track Info & Animated Equalizer */}
          <div className="flex items-center justify-between gap-3 mb-2.5 bg-background p-2 rounded border-2 border-border">
            <div className="min-w-0 flex-1">
              <div className="font-heading font-black text-xs uppercase truncate text-foreground">
                {currentTrack.title}
              </div>
              <div className="text-[10px] font-mono text-muted-foreground truncate flex items-center gap-1.5">
                <span>Nur Rahmat</span>
                <span>•</span>
                <span>{currentTrack.genre}</span>
              </div>
            </div>

            {/* Equalizer Bars */}
            <div className="flex items-end gap-1 h-5 shrink-0 px-1">
              {[0.4, 0.9, 0.6, 1.0, 0.7].map((height, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-sm bg-primary border border-border transition-all duration-200 ${
                    isPlaying ? "animate-pulse" : "h-1"
                  }`}
                  style={{
                    height: isPlaying ? `${height * 18}px` : "4px",
                    animationDelay: `${i * 120}ms`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="nuclear-btn bg-primary text-primary-foreground h-8 px-3 text-xs"
                title={isPlaying ? "Pause Ambient Audio" : "Play Ambient Audio"}
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-current" />}
                <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                onClick={nextTrack}
                className="nuclear-btn bg-background text-foreground h-8 px-2.5 text-xs"
                title="Next Track"
              >
                <SkipForward className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded border border-border bg-background text-foreground hover:bg-muted transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-3.5 w-3.5 text-red-500" /> : <Volume2 className="h-3.5 w-3.5" />}
              </button>
              <span className="font-mono text-[10px] font-bold text-muted-foreground">
                {currentTrack.duration}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
