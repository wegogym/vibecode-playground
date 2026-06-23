import { motion } from 'framer-motion'

const TABS = [
  { id: 'diary', label: 'Diary', icon: '◆' },
  { id: 'journey', label: 'Journey', icon: '◈' },
  { id: 'paths', label: 'Future', icon: '◉' },
  { id: 'profile', label: 'Profile', icon: '○' },
]

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <div className="bottom-nav">
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={`nav-tab ${activeTab === tab.id ? 'nav-tab--active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {activeTab === tab.id && (
            <motion.div
              className="nav-tab-indicator"
              layoutId="nav-indicator"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            />
          )}
          <span className="nav-tab-icon">{tab.icon}</span>
          <span className="nav-tab-label">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
