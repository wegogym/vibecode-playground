import { motion } from 'framer-motion'
import YunoSprite from './YunoSprite'

const LANDMARKS = [
  { pos: 25, type: 'sign', label: '25%' },
  { pos: 50, type: 'torii', label: '50%' },
  { pos: 75, type: 'lantern', label: '75%' },
  { pos: 100, type: 'goal', label: 'GOAL' },
]

function LandmarkArt({ type }) {
  switch (type) {
    case 'sign':
      return (
        <svg width="30" height="38" viewBox="0 0 30 38">
          <rect x="13" y="8" width="3" height="30" fill="#6c3483" />
          <polygon points="4,5 22,5 28,10 22,15 4,15" fill="#a855f7" />
          <rect x="7" y="9" width="12" height="2" fill="#e8d4f0" opacity="0.8" />
        </svg>
      )
    case 'torii':
      return (
        <svg width="34" height="38" viewBox="0 0 34 38">
          <rect x="0" y="2" width="34" height="4" rx="1" fill="#ff6b9d" />
          <rect x="3" y="8" width="28" height="3" fill="#e0245e" />
          <rect x="6" y="6" width="4" height="32" fill="#c2185b" />
          <rect x="24" y="6" width="4" height="32" fill="#c2185b" />
        </svg>
      )
    case 'lantern':
      return (
        <svg width="26" height="40" viewBox="0 0 26 40">
          <circle cx="13" cy="9" r="8" fill="#ffd166" opacity="0.25" />
          <circle cx="13" cy="9" r="5" fill="#ffd166" />
          <rect x="9" y="2" width="8" height="2" fill="#6c3483" />
          <rect x="11.5" y="13" width="3" height="27" fill="#6c3483" />
        </svg>
      )
    case 'goal':
      return (
        <svg width="32" height="42" viewBox="0 0 32 42">
          <rect x="12" y="2" width="3" height="34" fill="#e8d4f0" />
          <polygon points="15,3 30,8 15,13" fill="#ff6b9d" />
          <rect x="6" y="36" width="16" height="5" rx="1" fill="#3d0055" />
        </svg>
      )
    default:
      return null
  }
}

export default function JourneyScreen({ fatePoints, fateGoal, streak, activitiesLogged }) {
  const pct = Math.min((fatePoints / fateGoal) * 100, 100)
  const done = pct >= 100

  return (
    <div className="journey-screen">
      <div className="journey-bg">
        <div className="journey-ground" />
      </div>

      <div className="journey-content">
        <div className="journey-header">
          <div className="journey-title">TODAY'S JOURNEY</div>
          <div className="journey-date">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase()}</div>
        </div>

        {done ? (
          <motion.div
            className="journey-complete-banner"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="journey-complete-icon">◆</div>
            <div className="journey-complete-text">Today's future has been secured.</div>
          </motion.div>
        ) : (
          <div className="journey-status">
            <span className="journey-status-label">Future Status:</span>
            <span className="journey-status-value">
              {pct < 30 ? 'Unstable' : pct < 60 ? 'Stabilizing' : pct < 100 ? 'Converging' : 'Secured'}
            </span>
          </div>
        )}

        {/* Walking scene */}
        <div className="journey-scene">
          <div className="journey-scene-stars">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="journey-star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 55}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                }}
              />
            ))}
          </div>

          <div className="journey-scene-ground" />

          <div className="journey-scene-track">
            {/* Progress trail on the ground */}
            <motion.div
              className="journey-scene-progress"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            {/* Landmarks */}
            {LANDMARKS.map(lm => (
              <div
                key={lm.pos}
                className={`journey-landmark ${pct >= lm.pos ? 'journey-landmark--reached' : ''}`}
                style={{ left: `${lm.pos}%` }}
              >
                <LandmarkArt type={lm.type} />
                <div className="journey-landmark-label">{lm.label}</div>
              </div>
            ))}

            {/* Yuno walks toward the goal */}
            <motion.div
              className="journey-sprite"
              initial={{ left: '0%' }}
              animate={{ left: `${Math.max(pct - 3, 0)}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <YunoSprite walking={!done} size={40} />
            </motion.div>
          </div>
        </div>

        <div className="journey-endpoints">
          <span className="journey-endpoint journey-endpoint--start">START</span>
          <span className="journey-endpoint journey-endpoint--end">◆ SECURED</span>
        </div>

        {/* Stats */}
        <div className="journey-stats">
          <div className="journey-stat">
            <div className="journey-stat-value">{fatePoints}</div>
            <div className="journey-stat-label">FATE POINTS</div>
          </div>
          <div className="journey-stat-divider" />
          <div className="journey-stat">
            <div className="journey-stat-value">{streak}</div>
            <div className="journey-stat-label">DAY STREAK</div>
          </div>
          <div className="journey-stat-divider" />
          <div className="journey-stat">
            <div className="journey-stat-value">{activitiesLogged.length}</div>
            <div className="journey-stat-label">ACTIONS</div>
          </div>
        </div>

        {/* Activity summary */}
        {activitiesLogged.length > 0 && (
          <div className="journey-activities">
            <div className="journey-activities-label">Actions Logged Today</div>
            <div className="journey-activities-list">
              {activitiesLogged.map(act => (
                <div key={act.id} className="journey-activity-chip">
                  <span>{act.icon}</span> {act.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
