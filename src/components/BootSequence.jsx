import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  { id: 'detect', text: 'FUTURE DIARY DETECTED', delay: 0 },
  { id: 'init', text: 'INITIALIZING TIMELINE SYSTEM...', delay: 900 },
  { id: 'sync', text: 'SYNCING FATE COORDINATES...', delay: 1800 },
  { id: 'ready', text: 'DIARY #0001 — READY', delay: 2700 },
]

export default function BootSequence({ onComplete }) {
  const [visibleSteps, setVisibleSteps] = useState([])
  const [showOpen, setShowOpen] = useState(false)

  useEffect(() => {
    steps.forEach(step => {
      setTimeout(() => {
        setVisibleSteps(prev => [...prev, step.id])
      }, step.delay)
    })
    setTimeout(() => setShowOpen(true), 3600)
  }, [])

  return (
    <div className="boot-screen">
      <div className="boot-scanlines" />

      <div className="boot-center">
        <motion.div
          className="boot-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="boot-logo-inner">
            <div className="boot-diamond">◆</div>
            <div className="boot-title">FUTURE</div>
            <div className="boot-title-sub">PROTOCOL</div>
          </div>
        </motion.div>

        <div className="boot-log">
          {steps.map(step => (
            <AnimatePresence key={step.id}>
              {visibleSteps.includes(step.id) && (
                <motion.div
                  className={`boot-line ${step.id === 'ready' ? 'boot-line--ready' : ''}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="boot-line-prefix">{'>'}</span>
                  {step.text}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        <AnimatePresence>
          {showOpen && (
            <motion.button
              className="boot-open-btn"
              onClick={onComplete}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileTap={{ scale: 0.96 }}
            >
              OPEN DIARY
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="boot-footer">
        <span className="boot-footer-text">DIARY #0001 · PERSONAL TIMELINE ACTIVE</span>
      </div>
    </div>
  )
}
