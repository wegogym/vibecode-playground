import { motion } from 'framer-motion'

export default function JourneyScreen({ fatePoints, fateGoal, streak, activitiesLogged }) {
  const pct = Math.min((fatePoints / fateGoal) * 100, 100)
  const done = pct >= 100

  const milestones = [0, 25, 50, 75, 100]

  return (
    <div className="journey-screen">
      <div className="journey-bg">
        <div className="journey-stars">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="journey-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
              }}
            />
          ))}
        </div>
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

        {/* Path visualization */}
        <div className="journey-path-container">
          <div className="journey-path-track">
            {/* Milestone markers */}
            {milestones.map(m => (
              <div
                key={m}
                className={`journey-milestone ${pct >= m ? 'journey-milestone--reached' : ''}`}
                style={{ left: `${m}%` }}
              >
                <div className="journey-milestone-dot" />
                <div className="journey-milestone-label">{m}%</div>
              </div>
            ))}

            {/* Fill */}
            <motion.div
              className="journey-path-fill"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            {/* Character marker */}
            <motion.div
              className="journey-character-marker"
              initial={{ left: '0%' }}
              animate={{ left: `${Math.max(pct - 2, 0)}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="journey-char-icon">♦</div>
            </motion.div>
          </div>

          <div className="journey-endpoints">
            <span className="journey-endpoint journey-endpoint--start">START</span>
            <span className="journey-endpoint journey-endpoint--end">◆ SECURED</span>
          </div>
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
