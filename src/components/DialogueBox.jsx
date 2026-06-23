import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DialogueBox({ text, speaker = 'Yuno', onActivityOpen }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const textRef = useRef(text)

  useEffect(() => {
    if (text === textRef.current && displayed.length > 0) return
    textRef.current = text
    setDisplayed('')
    setDone(false)

    let i = 0
    const chars = text.replace(/\\n/g, '\n').split('')
    const interval = setInterval(() => {
      if (i >= chars.length) {
        clearInterval(interval)
        setDone(true)
        return
      }
      const char = chars[i]
    setDisplayed(prev => prev + char)
    i++
    }, 22)

    return () => clearInterval(interval)
  }, [text])

  const skipToEnd = () => {
    setDisplayed(text.replace(/\\n/g, '\n'))
    setDone(true)
  }

  return (
    <div className="dialogue-wrapper" onClick={!done ? skipToEnd : undefined}>
      {/* DDLC-style name tab */}
      <div className="dialogue-name-tab">{speaker}</div>

      <div className="dialogue-box">
        <div className="dialogue-text">
          {displayed.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < displayed.split('\n').length - 1 && <br />}
            </span>
          ))}
          {!done && <span className="dialogue-cursor">▌</span>}
        </div>
      </div>

      {/* Bottom action bar — DDLC menu style */}
      <div className="dialogue-menu-bar">
        <button className="dialogue-menu-item" onClick={onActivityOpen}>
          ◈ LOG FATE
        </button>
        <span className="dialogue-menu-divider">|</span>
        <span className="dialogue-menu-item dialogue-menu-item--dim">SKIP</span>
        <span className="dialogue-menu-divider">|</span>
        <span className="dialogue-menu-item dialogue-menu-item--dim">AUTO</span>
        <span className="dialogue-menu-divider">|</span>
        <span className="dialogue-menu-item dialogue-menu-item--dim">SAVE</span>
      </div>
    </div>
  )
}
