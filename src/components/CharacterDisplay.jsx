import { motion } from 'framer-motion'

export default function CharacterDisplay({ mood = 'neutral', fatePoints, fateGoal }) {
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
        <img
          src="/assets/yuno.jpg"
          alt="Yuno"
          className="yuno-character"
        />
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
