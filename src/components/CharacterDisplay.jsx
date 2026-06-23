import { useState } from 'react'
import { motion } from 'framer-motion'

function YunoPlaceholder() {
  return (
    <div className="yuno-placeholder">
      <div className="yuno-glow-ring" />
      <div className="yuno-glow-ring yuno-glow-ring--2" />
      <div className="yuno-silhouette">
        {/* Yuno Gasai — Mirai Nikki — flat cel-shading, no gradients */}
        <svg viewBox="0 0 200 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="gEyeL">
              <path d="M 61 100 C 61 90 67 85 77 85 C 87 85 94 90 94 100 C 94 110 87 114 77 114 C 67 114 61 110 61 100 Z" />
            </clipPath>
            <clipPath id="gEyeR">
              <path d="M 106 100 C 106 90 112 85 123 85 C 133 85 139 90 139 100 C 139 110 133 114 123 114 C 112 114 106 110 106 100 Z" />
            </clipPath>
          </defs>

          {/* ── Back hair (behind everything) ── */}
          <ellipse cx="100" cy="80" rx="50" ry="54" fill="#f4a0b5" />
          {/* Long flowing strands left & right */}
          <path d="M 54 96 C 38 124 28 182 30 270 C 32 288 44 294 56 292 L 60 208 C 56 180 56 152 62 124 C 64 110 62 104 56 98 Z" fill="#f4a0b5" />
          <path d="M 146 96 C 162 124 172 182 170 270 C 168 288 156 294 144 292 L 140 208 C 144 180 144 152 138 124 C 136 110 138 104 144 98 Z" fill="#f4a0b5" />
          {/* Strand shadow zones */}
          <path d="M 54 100 C 42 122 36 162 36 210 L 48 210 C 48 164 54 126 60 104 Z" fill="#de8899" opacity="0.55" />
          <path d="M 146 100 C 158 122 164 162 164 210 L 152 210 C 152 164 146 126 140 104 Z" fill="#de8899" opacity="0.55" />
          {/* Top-of-head shadow (under bangs) */}
          <path d="M 52 80 C 50 66 58 48 100 42 C 80 52 74 68 66 84 C 60 82 54 80 52 80 Z" fill="#de8899" opacity="0.5" />
          <path d="M 148 80 C 150 66 142 48 100 42 C 120 52 126 68 134 84 C 140 82 146 80 148 80 Z" fill="#de8899" opacity="0.5" />
          {/* Top highlight */}
          <path d="M 78 48 C 86 44 93 42 100 42 C 107 42 114 44 122 48 C 113 46 106 45 100 45 C 94 45 87 46 78 48 Z" fill="#fcc8d8" />

          {/* ── Uniform body ── */}
          <path d="M 48 212 C 38 224 32 258 32 296 L 168 296 C 168 258 162 224 152 212 C 142 204 126 200 114 198 L 86 198 C 74 200 58 204 48 212 Z" fill="#8468c0" />
          {/* Uniform shadow left */}
          <path d="M 48 212 C 38 224 32 258 32 296 L 64 296 L 64 212 Z" fill="#6450a0" opacity="0.55" />
          {/* White collar/cravat */}
          <path d="M 86 198 L 80 226 L 100 218 L 120 226 L 114 198 L 106 194 L 100 208 L 94 194 Z" fill="#f0f0f8" />
          <path d="M 86 198 L 80 226" stroke="#d0c8e8" strokeWidth="0.8" fill="none" />
          <path d="M 114 198 L 120 226" stroke="#d0c8e8" strokeWidth="0.8" fill="none" />
          {/* Red ribbon bow */}
          <path d="M 90 208 L 100 219 L 110 208 L 100 204 Z" fill="#c82020" />
          <path d="M 82 205 L 95 211 L 91 205 Z" fill="#9a1818" />
          <path d="M 118 205 L 105 211 L 109 205 Z" fill="#9a1818" />
          <circle cx="100" cy="210" r="3" fill="#e04040" />
          <circle cx="100" cy="210" r="1.5" fill="#ff8888" opacity="0.7" />

          {/* ── Neck ── */}
          <path d="M 88 166 L 88 200 L 112 200 L 112 166 C 108 172 104 174 100 175 C 96 174 92 172 88 166 Z" fill="#fde8d5" />
          {/* Neck shadow */}
          <path d="M 88 178 Q 96 176 100 176 Q 104 176 112 178 L 112 192 Q 104 188 100 188 Q 96 188 88 192 Z" fill="#efbf9e" opacity="0.5" />

          {/* ── Ears ── */}
          <ellipse cx="50" cy="110" rx="8" ry="10" fill="#fde8d5" />
          <ellipse cx="150" cy="110" rx="8" ry="10" fill="#fde8d5" />
          <path d="M 52 106 C 50 110 50 114 52 118" stroke="#d8a080" strokeWidth="1.3" fill="none" opacity="0.6" />
          <path d="M 148 106 C 150 110 150 114 148 118" stroke="#d8a080" strokeWidth="1.3" fill="none" opacity="0.6" />
          {/* Ear shadow */}
          <path d="M 44 106 C 42 110 42 114 44 118 L 46 116 C 44 112 44 108 46 106 Z" fill="#efbf9e" opacity="0.6" />
          <path d="M 156 106 C 158 110 158 114 156 118 L 154 116 C 156 112 156 108 154 106 Z" fill="#efbf9e" opacity="0.6" />

          {/* ── Face base ── */}
          <path
            d="M 100 48 C 148 48 152 80 152 98 C 152 130 136 152 118 160 Q 110 166 100 167 Q 90 166 82 160 C 64 152 48 130 48 98 C 48 80 52 48 100 48 Z"
            fill="#fde8d5"
          />
          {/* Right-side cel-shadow */}
          <path d="M 134 60 C 150 76 152 90 152 98 C 152 124 140 148 120 158 C 140 146 150 124 150 98 C 150 80 144 64 134 60 Z" fill="#efbf9e" opacity="0.3" />
          {/* Under-chin shadow */}
          <path d="M 84 158 Q 100 168 116 158 L 112 164 Q 100 170 88 164 Z" fill="#efbf9e" opacity="0.45" />

          {/* ── Face outline — drawn here so bangs overlap it at top ── */}
          <path
            d="M 100 48 C 148 48 152 80 152 98 C 152 130 136 152 118 160 Q 110 166 100 167 Q 90 166 82 160 C 64 152 48 130 48 98 C 48 80 52 48 100 48 Z"
            stroke="#1a0818" strokeWidth="1.8" fill="none"
          />

          {/* ── Eyebrows ── */}
          <path d="M 63 81 C 67 76 75 74 84 75" stroke="#a04858" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 116 75 C 125 74 133 76 137 81" stroke="#a04858" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* ── Left eye ── */}
          {/* Sclera */}
          <path d="M 61 100 C 61 90 67 85 77 85 C 87 85 94 90 94 100 C 94 110 87 114 77 114 C 67 114 61 110 61 100 Z" fill="#fffaf8" />
          {/* Iris base — reddish-brown / dark wine (Yuno Gasai) */}
          <circle cx="77" cy="100" r="14" fill="#7a1832" clipPath="url(#gEyeL)" />
          {/* Iris top shadow — eyelid cast */}
          <path d="M 63 100 C 63 90 68 85 77 85 C 86 85 91 90 91 100 Z" fill="#3d0c18" clipPath="url(#gEyeL)" />
          {/* Iris lower light zone */}
          <path d="M 63 106 L 91 106 L 91 114 L 63 113 Z" fill="#a03052" opacity="0.45" clipPath="url(#gEyeL)" />
          {/* Pupil */}
          <ellipse cx="77" cy="101" rx="5" ry="6.5" fill="#110408" clipPath="url(#gEyeL)" />
          {/* Main highlight — flat polygon, upper-left (classic Yuno eye) */}
          <path d="M 67 88 L 73 85 L 72 93 L 66 92 Z" fill="white" clipPath="url(#gEyeL)" />
          {/* Small dot highlight lower-right */}
          <circle cx="83" cy="108" r="2.2" fill="white" opacity="0.85" clipPath="url(#gEyeL)" />
          {/* Tiny sparkle */}
          <circle cx="69" cy="94" r="1" fill="white" opacity="0.6" clipPath="url(#gEyeL)" />
          {/* Upper eyelid line — thick */}
          <path d="M 61 100 C 62 88 68 83 77 83 C 86 83 93 88 94 100" stroke="#1a0818" strokeWidth="3.2" fill="none" strokeLinecap="round" />
          {/* Lower eyelid — thin */}
          <path d="M 62 102 C 64 110 70 115 77 115 C 84 115 90 110 92 102" stroke="#3a1828" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          {/* Upper lashes */}
          <path d="M 64 88 L 60 81" stroke="#1a0818" strokeWidth="2" strokeLinecap="round" />
          <path d="M 70 84 L 68 77" stroke="#1a0818" strokeWidth="2" strokeLinecap="round" />
          <path d="M 77 83 L 77 76" stroke="#1a0818" strokeWidth="2" strokeLinecap="round" />
          <path d="M 84 84 L 86 77" stroke="#1a0818" strokeWidth="2" strokeLinecap="round" />
          <path d="M 91 88 L 95 82" stroke="#1a0818" strokeWidth="2" strokeLinecap="round" />
          {/* Corner lashes */}
          <path d="M 62 99 L 55 96" stroke="#1a0818" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 94 99 L 101 96" stroke="#1a0818" strokeWidth="1.8" strokeLinecap="round" />
          {/* Lower lashes */}
          <path d="M 67 113 L 65 118" stroke="#3a1828" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <path d="M 77 115 L 77 120" stroke="#3a1828" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <path d="M 87 113 L 89 118" stroke="#3a1828" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

          {/* ── Right eye ── */}
          {/* Sclera */}
          <path d="M 106 100 C 106 90 112 85 123 85 C 133 85 139 90 139 100 C 139 110 133 114 123 114 C 112 114 106 110 106 100 Z" fill="#fffaf8" />
          {/* Iris base */}
          <circle cx="123" cy="100" r="14" fill="#7a1832" clipPath="url(#gEyeR)" />
          {/* Iris top shadow */}
          <path d="M 109 100 C 109 90 114 85 123 85 C 132 85 137 90 137 100 Z" fill="#3d0c18" clipPath="url(#gEyeR)" />
          {/* Iris lower light zone */}
          <path d="M 109 106 L 137 106 L 137 114 L 109 113 Z" fill="#a03052" opacity="0.45" clipPath="url(#gEyeR)" />
          {/* Pupil */}
          <ellipse cx="123" cy="101" rx="5" ry="6.5" fill="#110408" clipPath="url(#gEyeR)" />
          {/* Main highlight */}
          <path d="M 113 88 L 119 85 L 118 93 L 112 92 Z" fill="white" clipPath="url(#gEyeR)" />
          {/* Small dot */}
          <circle cx="129" cy="108" r="2.2" fill="white" opacity="0.85" clipPath="url(#gEyeR)" />
          {/* Sparkle */}
          <circle cx="115" cy="94" r="1" fill="white" opacity="0.6" clipPath="url(#gEyeR)" />
          {/* Upper eyelid line */}
          <path d="M 106 100 C 107 88 113 83 123 83 C 133 83 138 88 139 100" stroke="#1a0818" strokeWidth="3.2" fill="none" strokeLinecap="round" />
          {/* Lower eyelid */}
          <path d="M 107 102 C 109 110 115 115 123 115 C 131 115 137 110 138 102" stroke="#3a1828" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          {/* Upper lashes */}
          <path d="M 109 88 L 105 81" stroke="#1a0818" strokeWidth="2" strokeLinecap="round" />
          <path d="M 115 84 L 113 77" stroke="#1a0818" strokeWidth="2" strokeLinecap="round" />
          <path d="M 123 83 L 123 76" stroke="#1a0818" strokeWidth="2" strokeLinecap="round" />
          <path d="M 130 84 L 132 77" stroke="#1a0818" strokeWidth="2" strokeLinecap="round" />
          <path d="M 136 88 L 140 82" stroke="#1a0818" strokeWidth="2" strokeLinecap="round" />
          {/* Corner lashes */}
          <path d="M 106 99 L 99 96" stroke="#1a0818" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 139 99 L 146 96" stroke="#1a0818" strokeWidth="1.8" strokeLinecap="round" />
          {/* Lower lashes */}
          <path d="M 113 113 L 111 118" stroke="#3a1828" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <path d="M 123 115 L 123 120" stroke="#3a1828" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <path d="M 133 113 L 135 118" stroke="#3a1828" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

          {/* ── Nose — tiny shadow mark ── */}
          <path d="M 97 124 C 98 127 102 127 103 124" stroke="#c8886a" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.75" />

          {/* ── Mouth — small gentle curve ── */}
          <path d="M 90 140 C 93 145 107 145 110 140" stroke="#c07880" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M 94 143 C 97 146 103 146 106 143" stroke="#e0a0a8" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.7" />

          {/* ── Blush — subtle ── */}
          <ellipse cx="66" cy="128" rx="12" ry="6" fill="#f4a0a8" opacity="0.3" />
          <ellipse cx="134" cy="128" rx="12" ry="6" fill="#f4a0a8" opacity="0.3" />

          {/* ── Front bangs (drawn over face — cover top of face outline) ── */}
          {/* Left side bang */}
          <path d="M 50 98 C 48 78 54 56 66 46 L 68 80 C 62 86 56 94 52 100 Z" fill="#f4a0b5" />
          {/* Bang 2 left */}
          <path d="M 62 46 C 60 58 58 72 60 86 C 64 90 70 90 74 86 C 72 74 70 60 72 50 Z" fill="#f4a0b5" />
          {/* Bang 3 left wispy */}
          <path d="M 76 46 C 74 56 72 68 76 80 C 78 84 84 84 86 80 C 84 70 84 58 86 48 Z" fill="#f4a0b5" />
          {/* Center bang — slight middle part */}
          <path d="M 90 46 C 88 56 88 68 90 78 C 92 82 98 82 100 80 C 102 82 108 82 110 78 C 112 68 112 56 110 46 Z" fill="#f4a0b5" />
          {/* Bang 3 right wispy */}
          <path d="M 114 48 C 116 58 116 70 114 80 C 116 84 122 84 124 80 C 128 68 128 56 126 46 Z" fill="#f4a0b5" />
          {/* Bang 2 right */}
          <path d="M 128 50 C 130 62 130 74 128 86 C 124 90 116 90 112 86 C 114 72 116 58 128 48 Z" fill="#f4a0b5" />
          {/* Right side bang */}
          <path d="M 150 98 C 152 78 146 56 134 46 L 132 80 C 138 86 144 94 148 100 Z" fill="#f4a0b5" />

          {/* Bang shadow areas */}
          <path d="M 50 98 C 48 82 52 64 62 54 C 56 68 52 86 52 100 Z" fill="#de8899" opacity="0.55" />
          <path d="M 150 98 C 152 82 148 64 138 54 C 144 68 148 86 148 100 Z" fill="#de8899" opacity="0.55" />
          <path d="M 62 46 C 60 56 60 70 62 82 C 60 86 60 90 58 86 C 58 70 58 56 62 48 Z" fill="#de8899" opacity="0.4" />
          <path d="M 128 48 C 130 58 130 70 128 82 C 130 86 130 90 132 86 C 132 70 132 56 128 50 Z" fill="#de8899" opacity="0.4" />

          {/* Bang highlights — shine at top */}
          <path d="M 78 48 C 86 44 93 42 100 42 C 107 42 114 44 122 48 C 113 46 106 45 100 45 C 94 45 87 46 78 48 Z" fill="#fcc8d8" />
          <path d="M 56 68 C 56 62 58 58 62 56 C 60 60 58 65 58 72 Z" fill="#fcc8d8" opacity="0.7" />
          <path d="M 144 68 C 144 62 142 58 138 56 C 140 60 142 65 142 72 Z" fill="#fcc8d8" opacity="0.7" />

          {/* ── Loose wispy side strands framing face (Yuno Gasai signature) ── */}
          <path d="M 50 100 C 46 120 44 148 46 170 C 48 173 52 173 54 170 C 52 148 52 122 54 102 Z" fill="#f4a0b5" />
          <path d="M 57 108 C 55 130 55 154 57 172 C 59 175 62 173 62 170 C 60 152 60 128 60 110 Z" fill="#f4a0b5" />
          <path d="M 150 100 C 154 120 156 148 154 170 C 152 173 148 173 146 170 C 148 148 148 122 146 102 Z" fill="#f4a0b5" />
          <path d="M 143 108 C 145 130 145 154 143 172 C 141 175 138 173 138 170 C 140 152 140 128 140 110 Z" fill="#f4a0b5" />
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
