import WaveSurfer from "wavesurfer.js";
import { useEffect, useRef, useState} from "react";
import styles from "./style.module.css"
import audio from "./audio.mp3"
type Props = {
  audioDescription: string,
  audioUrl: string
}

export function MyAudio({audioDescription, audioUrl}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer>(null)
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState('0:00');


  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: containerRef.current ?? "",
      waveColor: '#504d4d',
      progressColor: '#0c9aff',
      cursorColor: 'transparent',
      barWidth: 3,
      barGap: 2,
      barRadius: 2,
      height: 30,
      url: audio,
    });

    wavesurferRef.current.on('ready', () => {
      if (wavesurferRef.current) {
        setDuration(formatTime(wavesurferRef.current.getDuration()));
      }
    });

    wavesurferRef.current.on('play', () => setIsPlaying(true));
    wavesurferRef.current.on('pause', () => setIsPlaying(false));
    wavesurferRef.current.on('finish', () => setIsPlaying(false));

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  return (
    <div className={styles.audioCard}>
      <h3 className={styles.audioTitle}>Ходи и слушай</h3>

      <div className={styles.audioPlayerPill}>
        <button className={styles.audioPlayBtn} onClick={togglePlay}>
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
              <rect x="2" y="1" width="4" height="12" rx="1" />
              <rect x="8" y="1" width="4" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="white" style={{ marginLeft: '2px' }}>
              <path d="M13.4 7.1c.8.5.8 1.7 0 2.2l-9.8 6c-.8.5-1.9-.1-1.9-1.1V1.8c0-1 .1-1.6 1.9-1.1l9.8 6z" />
            </svg>
          )}
        </button>

        <div className={styles.audioWaveformContainer}>
          <div ref={containerRef} className={styles.audioWaveform} />
          <span className={styles.audioTime}>{duration}</span>
        </div>
      </div>

      <p className={styles.audioDescription}>{audioDescription}</p>
    </div>
  );
}
