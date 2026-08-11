import React from 'react';
import Section from './Section';
import { ThemeProps } from '../types';
import { motion } from 'framer-motion';

// ─────────────────────────────────────────────
// 🎯 PHOTO POSITION TUNING
//    x: 0% = far left  │ 50% = center │ 100% = far right
//    y: 0% = top       │ 50% = center │ 100% = bottom
// ─────────────────────────────────────────────
const GROOM_X = '50%'; // move left ↔ right
const GROOM_Y = '50%'; // move up ↕ down

const BRIDE_X = '50%'; // move left ↔ right
const BRIDE_Y = '25%'; // move up ↕ down
// ─────────────────────────────────────────────

const PhotoCircle: React.FC<{
  src: string;
  alt: string;
  isDark?: boolean;
  accent?: 'sky' | 'pink';
  posX: string;
  posY: string;
}> = ({ src, alt, isDark = false, accent = 'sky', posX, posY }) => {
  const borderClass =
    accent === 'sky'
      ? isDark
        ? 'border-sky-500 shadow-sky-900/60'
        : 'border-sky-300 shadow-sky-200/50'
      : isDark
      ? 'border-pink-500 shadow-pink-900/60'
      : 'border-pink-300 shadow-pink-200/50';

  const glowClass =
    accent === 'sky'
      ? 'shadow-[0_0_40px_rgba(56,189,248,0.25)]'
      : 'shadow-[0_0_40px_rgba(244,114,182,0.25)]';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`w-44 h-44 md:w-56 md:h-56 rounded-full border-[4px] overflow-hidden relative ${borderClass} ${glowClass} transition-all duration-700`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ objectPosition: `${posX} ${posY}` }}
        draggable={false}
      />
      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
    </motion.div>
  );
};

const Couple: React.FC<ThemeProps> = ({ isDark }) => {
  return (
    <Section className="text-center space-y-12">

      {/* Groom */}
      <div className="flex flex-col items-center group">
        <div className="mb-8">
          <PhotoCircle
            src="/images/groom.jpeg"
            alt="Sardar Vali — The Groom"
            isDark={isDark}
            accent="sky"
            posX={GROOM_X}
            posY={GROOM_Y}
          />
        </div>
        <h2
          className={`font-serif text-4xl md:text-5xl mb-3 transition-colors font-bold uppercase tracking-wider ${
            isDark ? 'text-gray-100' : 'text-slate-800'
          }`}
        >
          Sardhar Vali
        </h2>
        <p
          className={`font-serif text-xs tracking-[0.3em] uppercase font-bold ${
            isDark ? 'text-sky-400' : 'text-sky-600'
          }`}
        >
          The Groom
        </p>
      </div>

      {/* Divider */}
      <div
        className={`font-serif text-4xl md:text-5xl font-bold ${
          isDark ? 'text-pink-300' : 'text-pink-400'
        }`}
      >
        &amp;
      </div>

      {/* Bride */}
      <div className="flex flex-col items-center group">
        <div className="mb-8">
          <PhotoCircle
            src="/images/bride.jpeg"
            alt="Sumiya Begam — The Bride"
            isDark={isDark}
            accent="pink"
            posX={BRIDE_X}
            posY={BRIDE_Y}
          />
        </div>
        <h2
          className={`font-serif text-4xl md:text-5xl mb-3 transition-colors font-bold uppercase tracking-wider ${
            isDark ? 'text-gray-100' : 'text-slate-800'
          }`}
        >
          Sumiya Begam
        </h2>
        <p
          className={`font-serif text-xs tracking-[0.3em] uppercase font-bold ${
            isDark ? 'text-pink-400' : 'text-pink-500'
          }`}
        >
          The Bride
        </p>
      </div>

    </Section>
  );
};

export default Couple;
