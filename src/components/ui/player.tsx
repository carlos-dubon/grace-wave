import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "./card";
import {
  LuPause,
  LuPlay,
  LuVolumeX,
  LuVolume2,
  LuLoaderCircle,
} from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/consts";

interface PlayerProps {
  className?: string;
}

export const Player = (props: PlayerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const hasLoadedOnce = useRef(false);

  useEffect(() => {
    setAudio(new Audio(SITE.streamUrl));
  }, []);

  const play = useCallback(async () => {
    setIsLoading(true);
    try {
      await audio?.play();
      setIsPlaying(true);
      hasLoadedOnce.current = true;
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  }, [audio]);

  const pause = useCallback(() => {
    audio?.pause();
    setIsPlaying(false);
  }, [audio]);

  const toggleMute = useCallback(() => {
    if (!audio) return;

    audio.volume = isMuted ? 1 : 0;
    setIsMuted((prev) => !prev);
  }, [audio, isMuted]);

  return (
    <Card id="live" className={props.className}>
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isPlaying ? pause : play}
          className="cursor-pointer relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-background"
        >
          {isLoading && !hasLoadedOnce.current ? (
            <LuLoaderCircle className="h-7 w-7 animate-spin" />
          ) : (
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <LuPause className="h-7 w-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <LuPlay className="ml-1 h-7 w-7" />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.button>

        {/* Equalizer bars */}
        <div className="flex items-end gap-1 h-8">
          {[0, 0.2, 0.1, 0.3, 0.15].map((delay, i) => (
            <div
              key={i}
              className={`w-1 rounded-full bg-accent transition-all ${isPlaying ? "animate-eq-bar" : "h-1"}`}
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-foreground">
            {isPlaying ? "Now Playing" : "Tap to Listen"}
          </span>
          <span className="text-xs text-muted-foreground">Live Stream</span>
        </div>

        <button
          onClick={toggleMute}
          className="cursor-pointer ml-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {isMuted ? (
            <LuVolumeX className="h-5 w-5" />
          ) : (
            <LuVolume2 className="h-5 w-5" />
          )}
        </button>
      </div>
    </Card>
  );
};
