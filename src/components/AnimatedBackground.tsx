import type { CSSProperties } from 'react';

const glowDots = [
  { left: '8%', top: '25%', size: 8, delay: '0s' },
  { left: '18%', top: '65%', size: 6, delay: '1s' },
  { left: '28%', top: '15%', size: 7, delay: '2.3s' },
  { left: '42%', top: '70%', size: 5, delay: '3.1s' },
  { left: '55%', top: '30%', size: 6, delay: '4.5s' },
  { left: '62%', top: '10%', size: 5, delay: '5.2s' },
  { left: '70%', top: '55%', size: 7, delay: '2s' },
  { left: '82%', top: '20%', size: 6, delay: '3.7s' },
  { left: '88%', top: '65%', size: 5, delay: '1.5s' },
  { left: '30%', top: '85%', size: 6, delay: '4s' },
  { left: '75%', top: '80%', size: 7, delay: '5.8s' },
  { left: '15%', top: '80%', size: 5, delay: '6.2s' },
];

export default function AnimatedBackground() {
  const gridStyle: CSSProperties = {
    backgroundImage:
      'linear-gradient(115deg, rgba(255,255,255,0.05) 25%, transparent 25%), linear-gradient(295deg, rgba(255,255,255,0.04) 25%, transparent 25%)',
    backgroundSize: '220px 220px',
    backgroundPosition: '0 0, 110px 110px',
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft radial glow */}
      <div className="absolute inset-0 opacity-40 dark:opacity-25">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.2),_transparent_60%)] animate-gradient-slow" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-[#D73F74] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-1/4 w-96 h-96 bg-[#FFCC63] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-1/4 left-1/4 w-96 h-96 bg-[#843661] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Dark mode gradients */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-[#D73F74] rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-5 animate-blob dark:animate-blob-slow" />
      <div className="absolute top-0 -right-1/4 w-96 h-96 bg-[#FFCC63] rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000 dark:animate-blob-slow" />
      <div className="absolute -bottom-1/4 left-1/4 w-96 h-96 bg-[#843661] rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-4000 dark:animate-blob-slow" />

      {/* Gradient sweep beams */}
      <div className="absolute inset-0">
        <div className="absolute -inset-x-1/2 top-1/3 h-64 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent blur-3xl rotate-6 animate-pan-diagonal" />
        <div className="absolute inset-x-0 bottom-1/5 h-72 bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent blur-3xl -rotate-6 animate-pan-diagonal-slow" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-25 dark:opacity-10 mix-blend-overlay" style={gridStyle} />

      {/* Twinkling particles */}
      <div className="absolute inset-0">
        {glowDots.map(({ left, top, size, delay }, index) => (
          <span
            key={`${left}-${top}-${index}`}
            className="absolute rounded-full bg-white/40 dark:bg-white/25 shadow-[0_0_15px_rgba(255,255,255,0.4)] animate-twinkle"
            style={{
              left,
              top,
              width: size,
              height: size,
              animationDelay: delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
