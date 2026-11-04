"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroMedia } from "@/data/personal";

/**
 * Full-bleed looping hero video. The poster stays underneath so a blocked
 * autoplay, a slow connection, or a decoding error never leaves a blank hero.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const resume = () => {
      if (document.hidden) return;
      void video.play().catch(() => {
        // Autoplay can be blocked; the poster fallback remains visible.
      });
    };

    resume();
    document.addEventListener("visibilitychange", resume);

    return () => document.removeEventListener("visibilitychange", resume);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-canvas">
      <Image
        src={heroMedia.posterSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_center] opacity-90 sm:object-[64%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(139,92,246,0.28),transparent_56%)]"
      />

      {videoUnavailable ? null : (
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover object-[60%_center] sm:object-[64%_center]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroMedia.posterSrc}
          controls={false}
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          onError={() => setVideoUnavailable(true)}
        >
          <source
            src={heroMedia.videoSrc}
            type="video/mp4"
            onError={() => setVideoUnavailable(true)}
          />
        </video>
      )}
    </div>
  );
}
