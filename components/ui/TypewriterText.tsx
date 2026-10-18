"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  phrases?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
}

export function TypewriterText({
  phrases = [
    "that builds decoupled APIs & Next.js platforms",
    "that designs cross-platform Flutter apps",
    "that deploys on-device TensorFlow Lite models",
    "that ships production systems to Azure VM & Cloud Run"
  ],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseMs = 1800,
  className = ""
}: TypewriterTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[phraseIndex];

    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={`inline-block font-heading font-black ${className}`}>
      {currentText}
      <span className="animate-blink font-mono font-normal ml-0.5 text-primary">|</span>
    </span>
  );
}
