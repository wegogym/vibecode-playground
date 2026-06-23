import { motion, AnimatePresence } from 'framer-motion'
import { ACTIVITIES } from '../lib/gameData'

function ActivityCard({ activity, logged, onLog }) {
  return (
    <motion.div
      className={`activity-card ${logged ? 'activity-card--logged' : ''}`}
      whileTap={!logged ? { scale: 0.97 } : {}}
      onClick={!logged ? onLog : undefined}
      layout
    >
      <div className="activity-card-icon">{activity.icon}</div>
      <div className="activity-card-info">
        <div className="activity-card-name">{activity.name}</div>
        <div className="activity-card-tag">{activity.tag}</div>
      </div>
      <div className="activity-card-pts">
        {logged ? (
          <motion.span
            className="activity-card-pts--done"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            ✓
          </motion.span>
        ) : (
          <span className="activity-card-pts--num">+{activity.points} FP</span>
        )}
      </div>
    </motion.div>
  )
}

export default function ActivityPanel({ visible, loggedIds, onLog, onClose, onGenerate }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="activity-panel-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="activity-panel"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="activity-panel-handle" />
            <div className="activity-panel-header">
              <span className="activity-panel-title">◆ FATE ACTIONS</span>
              <button className="activity-panel-close" onClick={onClose}>✕</button>
            </div>
            <div className="activity-panel-subtitle">
              Log your actions to stabilize today's future
            </div>

            <div className="activity-list">
              {ACTIVITIES.map(act => (
                <ActivityCard
                  key={act.id}
                  activity={act}
                  logged={loggedIds.includes(act.id)}
                  onLog={() => onLog(act)}
                />
              ))}
            </div>

            <button className="generate-diary-btn" onClick={() => { onGenerate(); onClose() }}>
              ▶ RECEIVE FUTURE DIARY ENTRY
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
