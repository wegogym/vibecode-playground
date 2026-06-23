import { useState } from 'react'
import { motion } from 'framer-motion'

function YunoPlaceholder() {
  return (
    <div className="yuno-placeholder">
      <div className="yuno-glow-ring" />
      <div className="yuno-glow-ring yuno-glow-ring--2" />
      <div className="yuno-silhouette">
        <svg viewBox="0 0 200 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fde8d5" />
              <stop offset="100%" stopColor="#f8cfb2" />
            </linearGradient>
            <linearGradient id="aHair" x1="0.2" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#f090d0" />
              <stop offset="50%" stopColor="#d860b8" />
              <stop offset="100%" stopColor="#b03898" />
            </linearGradient>
            <linearGradient id="aHairHi" x1="0.3" y1="0" x2="0.7" y2="0.8">
              <stop offset="0%" stopColor="#fcd8f0" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#fcd8f0" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="aIrisL" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#9878d8" />
              <stop offset="30%" stopColor="#5838a8" />
              <stop offset="70%" stopColor="#301870" />
              <stop offset="100%" stopColor="#180840" />
            </radialGradient>
            <radialGradient id="aIrisR" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#9878d8" />
              <stop offset="30%" stopColor="#5838a8" />
              <stop offset="70%" stopColor="#301870" />
              <stop offset="100%" stopColor="#180840" />
            </radialGradient>
            <linearGradient id="aBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4030a0" />
              <stop offset="100%" stopColor="#201060" />
            </linearGradient>
            <clipPath id="aEyeL">
              <path d="M 63 103 C 63 91 69 86 80 86 C 91 86 97 91 97 103 C 97 112 91 116 80 116 C 69 116 63 112 63 103 Z" />
            </clipPath>
            <clipPath id="aEyeR">
              <path d="M 103 103 C 103 91 109 86 120 86 C 131 86 137 91 137 103 C 137 112 131 116 120 116 C 109 116 103 112 103 103 Z" />
            </clipPath>
          </defs>

          {/* ── Back hair ── */}
          <ellipse cx="100" cy="82" rx="47" ry="52" fill="url(#aHair)" />
          <path d="M 56 94 C 40 122 32 178 34 262 C 36 276 44 280 52 278 L 54 198 C 52 172 54 144 62 114 Z" fill="url(#aHair)" />
          <path d="M 144 94 C 160 122 168 178 166 262 C 164 276 156 280 148 278 L 146 198 C 148 172 146 144 138 114 Z" fill="url(#aHair)" />

          {/* ── Body / uniform ── */}
          <path d="M 46 210 C 36 222 30 254 30 294 L 170 294 C 170 254 164 222 154 210 C 144 202 126 198 114 196 L 86 196 C 74 198 56 202 46 210 Z" fill="url(#aBody)" />
          <path d="M 46 210 C 36 222 30 254 30 294 L 62 294 L 64 210 Z" fill="#100830" opacity="0.3" />
          {/* White lapels */}
          <path d="M 86 196 L 78 222 L 100 216 L 122 222 L 114 196 L 106 192 L 100 206 L 94 192 Z" fill="#f2f0fa" />
          <path d="M 86 196 L 78 222" stroke="#d0c8e8" strokeWidth="0.8" />
          <path d="M 114 196 L 122 222" stroke="#d0c8e8" strokeWidth="0.8" />
          {/* Pink ribbon */}
          <path d="M 93 207 L 100 216 L 107 207 L 100 203 Z" fill="#e04080" />
          <path d="M 86 203 L 96 208 L 93 203 Z" fill="#b82860" />
          <path d="M 114 203 L 104 208 L 107 203 Z" fill="#b82860" />
          <circle cx="100" cy="207" r="2.5" fill="#ff80a8" />

          {/* ── Neck ── */}
          <path d="M 88 164 L 88 198 L 112 198 L 112 164 C 108 170 104 172 100 173 C 96 172 92 170 88 164 Z" fill="url(#aSkin)" />
          <ellipse cx="100" cy="188" rx="8" ry="5" fill="#e0a888" opacity="0.4" />

          {/* ── Ears (behind face) ── */}
          <ellipse cx="53" cy="108" rx="8" ry="10" fill="url(#aSkin)" />
          <ellipse cx="147" cy="108" rx="8" ry="10" fill="url(#aSkin)" />
          <path d="M 55 104 C 53 108 53 112 55 116" stroke="#d8a080" strokeWidth="1.2" fill="none" opacity="0.6" />
          <path d="M 145 104 C 147 108 147 112 145 116" stroke="#d8a080" strokeWidth="1.2" fill="none" opacity="0.6" />

          {/* ── Face base ── */}
          <path
            d="M 100 48 C 147 48 151 80 151 98 C 151 130 136 152 118 160 Q 110 166 100 167 Q 90 166 82 160 C 64 152 49 130 49 98 C 49 80 53 48 100 48 Z"
            fill="url(#aSkin)"
          />
          {/* Cel-shadow right side */}
          <path d="M 134 60 C 148 74 151 90 151 98 C 151 124 138 150 120 160 C 138 148 150 126 150 98 C 150 82 145 66 134 60 Z" fill="#e4a888" opacity="0.22" />
          {/* Under-chin shadow */}
          <path d="M 84 158 Q 100 168 116 158 L 112 164 Q 100 170 88 164 Z" fill="#d8a070" opacity="0.3" />

          {/* ── Eyebrows ── */}
          <path d="M 64 83 C 68 77 76 75 84 77" stroke="#702888" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 116 77 C 124 75 132 77 136 83" stroke="#702888" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Brow highlight */}
          <path d="M 65 84 C 69 79 77 77 84 79" stroke="#d060d0" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35" />
          <path d="M 116 79 C 124 77 132 79 135 84" stroke="#d060d0" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35" />

          {/* ── Left eye ── */}
          {/* Sclera */}
          <path d="M 63 103 C 63 91 69 86 80 86 C 91 86 97 91 97 103 C 97 112 91 116 80 116 C 69 116 63 112 63 103 Z" fill="white" />
          <path d="M 64 105 C 64 96 70 92 80 92 C 90 92 96 96 96 105" fill="#eee8f8" opacity="0.5" />
          {/* Iris */}
          <circle cx="80" cy="101" r="13" fill="url(#aIrisL)" clipPath="url(#aEyeL)" />
          <ellipse cx="80" cy="90" rx="7" ry="8" fill="white" opacity="0.1" clipPath="url(#aEyeL)" />
          {/* Limbal ring */}
          <circle cx="80" cy="101" r="13" stroke="#0c0418" strokeWidth="1.5" fill="none" clipPath="url(#aEyeL)" />
          {/* Inner iris ring detail */}
          <circle cx="80" cy="101" r="8" stroke="#6040b8" strokeWidth="0.6" fill="none" clipPath="url(#aEyeL)" opacity="0.5" />
          {/* Pupil */}
          <ellipse cx="80" cy="103" rx="5" ry="6.5" fill="#06020e" clipPath="url(#aEyeL)" />
          {/* Large highlight upper-left */}
          <ellipse cx="72" cy="93" rx="4.5" ry="3.5" fill="white" opacity="0.95" clipPath="url(#aEyeL)" />
          {/* Small lower-right highlight */}
          <circle cx="87" cy="110" r="2" fill="white" opacity="0.65" clipPath="url(#aEyeL)" />
          {/* Catchlight sparkle */}
          <circle cx="75" cy="95" r="1.2" fill="white" opacity="0.5" clipPath="url(#aEyeL)" />
          {/* Upper lid shadow inside iris */}
          <path d="M 63 103 C 63 91 69 86 80 86 C 91 86 97 91 97 103" fill="#1a0838" opacity="0.4" clipPath="url(#aEyeL)" />
          {/* Upper eyelid line — thick */}
          <path d="M 63 103 C 64 88 70 83 80 83 C 90 83 96 88 97 103" stroke="#120624" strokeWidth="3.2" fill="none" strokeLinecap="round" />
          {/* Lower eyelid line — thin */}
          <path d="M 64 105 C 66 112 72 117 80 117 C 88 117 94 112 96 105" stroke="#2c1858" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />
          {/* Upper lashes */}
          <path d="M 66 89 L 62 82" stroke="#120624" strokeWidth="2" strokeLinecap="round" />
          <path d="M 72 85 L 70 78" stroke="#120624" strokeWidth="2" strokeLinecap="round" />
          <path d="M 80 84 L 80 77" stroke="#120624" strokeWidth="2" strokeLinecap="round" />
          <path d="M 88 85 L 89 78" stroke="#120624" strokeWidth="2" strokeLinecap="round" />
          <path d="M 94 89 L 98 83" stroke="#120624" strokeWidth="2" strokeLinecap="round" />
          {/* Corner lashes */}
          <path d="M 64 102 L 57 98" stroke="#120624" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 97 102 L 104 98" stroke="#120624" strokeWidth="1.8" strokeLinecap="round" />
          {/* Lower lashes */}
          <path d="M 69 115 L 67 120" stroke="#2c1858" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
          <path d="M 80 117 L 80 122" stroke="#2c1858" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
          <path d="M 91 115 L 93 120" stroke="#2c1858" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />

          {/* ── Right eye ── */}
          {/* Sclera */}
          <path d="M 103 103 C 103 91 109 86 120 86 C 131 86 137 91 137 103 C 137 112 131 116 120 116 C 109 116 103 112 103 103 Z" fill="white" />
          <path d="M 104 105 C 104 96 110 92 120 92 C 130 92 136 96 136 105" fill="#eee8f8" opacity="0.5" />
          {/* Iris */}
          <circle cx="120" cy="101" r="13" fill="url(#aIrisR)" clipPath="url(#aEyeR)" />
          <ellipse cx="120" cy="90" rx="7" ry="8" fill="white" opacity="0.1" clipPath="url(#aEyeR)" />
          {/* Limbal ring */}
          <circle cx="120" cy="101" r="13" stroke="#0c0418" strokeWidth="1.5" fill="none" clipPath="url(#aEyeR)" />
          {/* Inner iris ring detail */}
          <circle cx="120" cy="101" r="8" stroke="#6040b8" strokeWidth="0.6" fill="none" clipPath="url(#aEyeR)" opacity="0.5" />
          {/* Pupil */}
          <ellipse cx="120" cy="103" rx="5" ry="6.5" fill="#06020e" clipPath="url(#aEyeR)" />
          {/* Large highlight upper-left */}
          <ellipse cx="112" cy="93" rx="4.5" ry="3.5" fill="white" opacity="0.95" clipPath="url(#aEyeR)" />
          {/* Small lower-right highlight */}
          <circle cx="127" cy="110" r="2" fill="white" opacity="0.65" clipPath="url(#aEyeR)" />
          {/* Catchlight sparkle */}
          <circle cx="115" cy="95" r="1.2" fill="white" opacity="0.5" clipPath="url(#aEyeR)" />
          {/* Upper lid shadow inside iris */}
          <path d="M 103 103 C 103 91 109 86 120 86 C 131 86 137 91 137 103" fill="#1a0838" opacity="0.4" clipPath="url(#aEyeR)" />
          {/* Upper eyelid line — thick */}
          <path d="M 103 103 C 104 88 110 83 120 83 C 130 83 136 88 137 103" stroke="#120624" strokeWidth="3.2" fill="none" strokeLinecap="round" />
          {/* Lower eyelid line — thin */}
          <path d="M 104 105 C 106 112 112 117 120 117 C 128 117 134 112 136 105" stroke="#2c1858" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />
          {/* Upper lashes */}
          <path d="M 109 89 L 102 82" stroke="#120624" strokeWidth="2" strokeLinecap="round" />
          <path d="M 115 85 L 112 78" stroke="#120624" strokeWidth="2" strokeLinecap="round" />
          <path d="M 120 84 L 120 77" stroke="#120624" strokeWidth="2" strokeLinecap="round" />
          <path d="M 128 85 L 130 78" stroke="#120624" strokeWidth="2" strokeLinecap="round" />
          <path d="M 134 89 L 138 83" stroke="#120624" strokeWidth="2" strokeLinecap="round" />
          {/* Corner lashes */}
          <path d="M 103 102 L 96 98" stroke="#120624" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 137 102 L 144 98" stroke="#120624" strokeWidth="1.8" strokeLinecap="round" />
          {/* Lower lashes */}
          <path d="M 111 115 L 109 120" stroke="#2c1858" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
          <path d="M 120 117 L 120 122" stroke="#2c1858" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
          <path d="M 129 115 L 131 120" stroke="#2c1858" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />

          {/* ── Nose ── */}
          <path d="M 97 124 C 98 127 102 127 103 124" stroke="#c88860" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.7" />

          {/* ── Mouth ── */}
          <path d="M 91 140 C 94 146 106 146 109 140" stroke="#d4788a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M 95 143 C 97 146 103 146 105 143" stroke="#f0a0b4" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.7" />

          {/* ── Blush ── */}
          <ellipse cx="68" cy="128" rx="13" ry="7" fill="#ffb0c0" opacity="0.38" />
          <ellipse cx="132" cy="128" rx="13" ry="7" fill="#ffb0c0" opacity="0.38" />
          <line x1="59" y1="124" x2="65" y2="124" stroke="#ff90a0" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
          <line x1="59" y1="129" x2="65" y2="129" stroke="#ff90a0" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
          <line x1="135" y1="124" x2="141" y2="124" stroke="#ff90a0" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
          <line x1="135" y1="129" x2="141" y2="129" stroke="#ff90a0" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />

          {/* ── Front hair / bangs (drawn over face) ── */}
          {/* Side bang left */}
          <path d="M 53 96 C 50 76 56 56 68 48 L 70 82 C 64 86 58 92 54 98 Z" fill="url(#aHair)" />
          {/* Bang chunk 2 */}
          <path d="M 64 48 C 62 60 60 74 62 88 C 66 92 72 92 76 88 C 74 76 72 62 74 52 Z" fill="url(#aHair)" />
          {/* Bang chunk 3 */}
          <path d="M 78 46 C 76 58 74 72 78 84 C 82 88 88 86 90 80 C 88 70 88 58 90 48 Z" fill="url(#aHair)" />
          {/* Center bang */}
          <path d="M 92 46 C 90 56 90 68 92 78 C 94 82 100 82 100 80 C 100 82 106 82 108 78 C 110 68 110 56 108 46 Z" fill="url(#aHair)" />
          {/* Bang chunk right 3 */}
          <path d="M 110 48 C 112 58 112 70 110 80 C 112 86 118 88 122 84 C 126 72 126 58 124 46 Z" fill="url(#aHair)" />
          {/* Bang chunk right 2 */}
          <path d="M 126 52 C 128 64 128 76 126 88 C 122 92 114 92 112 88 C 114 74 116 60 126 50 Z" fill="url(#aHair)" />
          {/* Side bang right */}
          <path d="M 147 96 C 150 76 144 56 132 48 L 130 82 C 136 86 142 92 146 98 Z" fill="url(#aHair)" />
          {/* Ahoge cowlick */}
          <path d="M 98 46 C 96 36 100 24 105 20 C 110 16 112 22 110 32 C 108 40 104 44 102 46" fill="url(#aHair)" />

          {/* ── Hair highlights / cel-shading ── */}
          {/* Top shine */}
          <path d="M 76 48 C 82 44 92 42 100 42 C 108 42 118 44 124 48 C 114 46 106 45 100 45 C 94 45 86 46 76 48 Z" fill="url(#aHairHi)" />
          {/* Side gleam left */}
          <path d="M 56 70 C 56 62 58 58 64 56 C 62 60 60 66 60 74 Z" fill="white" opacity="0.25" />
          {/* Side gleam right */}
          <path d="M 144 70 C 144 62 142 58 136 56 C 138 60 140 66 140 74 Z" fill="white" opacity="0.25" />
          {/* Strand shading lines */}
          <path d="M 60 66 C 58 80 56 94 54 106" stroke="#c050a8" strokeWidth="0.9" fill="none" opacity="0.45" />
          <path d="M 68 54 C 66 68 64 82 62 94" stroke="#c050a8" strokeWidth="0.9" fill="none" opacity="0.45" />
          <path d="M 84 46 C 82 60 80 74 78 86" stroke="#c050a8" strokeWidth="0.9" fill="none" opacity="0.45" />
          <path d="M 140 66 C 142 80 144 94 146 106" stroke="#c050a8" strokeWidth="0.9" fill="none" opacity="0.45" />
          <path d="M 132 54 C 134 68 136 82 138 94" stroke="#c050a8" strokeWidth="0.9" fill="none" opacity="0.45" />
          <path d="M 116 46 C 118 60 120 74 122 86" stroke="#c050a8" strokeWidth="0.9" fill="none" opacity="0.45" />

          {/* ── Face outline (cel-shading style) ── */}
          <path
            d="M 100 48 C 147 48 151 80 151 98 C 151 130 136 152 118 160 Q 110 166 100 167 Q 90 166 82 160 C 64 152 49 130 49 98 C 49 80 53 48 100 48 Z"
            stroke="#28103a" strokeWidth="1.5" fill="none"
          />
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
