import { useState } from 'react'
import { motion } from 'framer-motion'

function YunoPlaceholder() {
  return (
    <div className="yuno-placeholder">
      <div className="yuno-glow-ring" />
      <div className="yuno-glow-ring yuno-glow-ring--2" />
      <div className="yuno-silhouette">
        <svg viewBox="0 0 120 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hair */}
          <ellipse cx="60" cy="42" rx="34" ry="38" fill="url(#hairGrad)" opacity="0.9"/>
          <ellipse cx="28" cy="60" rx="12" ry="30" fill="url(#hairGrad)" opacity="0.85"/>
          <ellipse cx="92" cy="60" rx="12" ry="30" fill="url(#hairGrad)" opacity="0.85"/>
          <path d="M30 80 Q20 130 22 180" stroke="url(#hairGrad)" strokeWidth="20" strokeLinecap="round" opacity="0.8"/>
          <path d="M90 80 Q100 130 98 180" stroke="url(#hairGrad)" strokeWidth="20" strokeLinecap="round" opacity="0.8"/>
          {/* Face */}
          <ellipse cx="60" cy="52" rx="24" ry="26" fill="url(#skinGrad)"/>
          {/* Eyes */}
          <ellipse cx="50" cy="52" rx="5" ry="6" fill="#c0392b"/>
          <ellipse cx="70" cy="52" rx="5" ry="6" fill="#c0392b"/>
          <ellipse cx="51" cy="51" rx="2" ry="2.5" fill="#1a0010"/>
          <ellipse cx="71" cy="51" rx="2" ry="2.5" fill="#1a0010"/>
          <circle cx="52" cy="50" r="1" fill="white" opacity="0.8"/>
          <circle cx="72" cy="50" r="1" fill="white" opacity="0.8"/>
          {/* Blush */}
          <ellipse cx="44" cy="58" rx="5" ry="3" fill="#ff9ab5" opacity="0.5"/>
          <ellipse cx="76" cy="58" rx="5" ry="3" fill="#ff9ab5" opacity="0.5"/>
          {/* Body */}
          <path d="M36 76 Q60 70 84 76 L88 140 Q60 150 32 140 Z" fill="url(#bodyGrad)"/>
          {/* Ribbon */}
          <path d="M52 80 L60 88 L68 80 L60 76 Z" fill="#e74c3c"/>
          {/* Arms */}
          <path d="M36 82 Q20 100 18 130" stroke="url(#skinGrad)" strokeWidth="14" strokeLinecap="round"/>
          <path d="M84 82 Q100 100 102 130" stroke="url(#skinGrad)" strokeWidth="14" strokeLinecap="round"/>
          {/* Hands holding phone */}
          <rect x="14" y="125" width="22" height="35" rx="4" fill="url(#phoneGrad)" opacity="0.9"/>
          <rect x="16" y="127" width="18" height="25" rx="2" fill="#a8e6cf" opacity="0.6"/>
          <defs>
            <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffb6d9"/>
              <stop offset="100%" stopColor="#ff6b9d"/>
            </linearGradient>
            <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe4d0"/>
              <stop offset="100%" stopColor="#ffd0c0"/>
            </linearGradient>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9b59b6"/>
              <stop offset="100%" stopColor="#6c3483"/>
            </linearGradient>
            <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7fdbca"/>
              <stop offset="100%" stopColor="#4db6ac"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default function CharacterDisplay({ mood = 'neutral', fatePoints, fateGoal }) {
  const [imgError, setImgError] = useState(false)

  const moodClass = {
    neutral: '',
    happy: 'char--happy',
    serious: 'char--serious',
    excited: 'char--excited',
  }[mood] || ''

  return (
    <div className={`character-area ${moodClass}`}>
      <div className="character-bg">
        <div className="char-bg-orb char-bg-orb--1" />
        <div className="char-bg-orb char-bg-orb--2" />
        <div className="char-bg-orb char-bg-orb--3" />
        <div className="char-bg-grid" />
      </div>

      <motion.div
        className="character-sprite"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {imgError ? (
          <YunoPlaceholder />
        ) : (
          <img
            src="/yuno.png"
            alt="Yuno"
            className="yuno-img"
            onError={() => setImgError(true)}
          />
        )}
      </motion.div>

      {/* Fate indicator floating over character area */}
      <div className="fate-hud">
        <div className="fate-hud-label">FATE STABILITY</div>
        <div className="fate-hud-bar-track">
          <motion.div
            className="fate-hud-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((fatePoints / fateGoal) * 100, 100)}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
        <div className="fate-hud-pts">{fatePoints} / {fateGoal} FP</div>
      </div>
    </div>
  )
}
