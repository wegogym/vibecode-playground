import { motion, AnimatePresence } from 'framer-motion'

export default function DiaryFeed({ entries, onDelete }) {
  if (entries.length === 0) {
    return (
      <div className="diary-empty">
        <div className="diary-empty-icon">◆</div>
        <div className="diary-empty-text">No entries yet.</div>
        <div className="diary-empty-sub">Log fate actions and receive your first transmission.</div>
      </div>
    )
  }

  return (
    <div className="diary-feed">
      <div className="diary-feed-label">
        <span>── TRANSMISSION LOG</span>
        <span className="diary-feed-count">{entries.length}</span>
      </div>
      <AnimatePresence>
        {entries.map(entry => (
          <motion.div
            key={entry.id}
            className="diary-entry"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            layout
          >
            <button className="diary-entry-delete" onClick={() => onDelete(entry.id)}>✕</button>
            <div className="diary-entry-meta">
              <span className="diary-entry-date">{entry.date} · {entry.time}</span>
              <div className="diary-entry-tags">
                {entry.activities.map(tag => (
                  <span key={tag} className="diary-entry-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="diary-entry-body">
              {entry.message.split('\n').map((line, i) => (
                <span key={i}>{line}{i < entry.message.split('\n').length - 1 && <br />}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
