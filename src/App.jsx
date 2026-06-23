import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

import BootSequence from './components/BootSequence'
import CharacterDisplay from './components/CharacterDisplay'
import DialogueBox from './components/DialogueBox'
import ActivityPanel from './components/ActivityPanel'
import DiaryFeed from './components/DiaryFeed'
import JourneyScreen from './components/JourneyScreen'
import FuturePathsScreen from './components/FuturePathsScreen'
import BottomNav from './components/BottomNav'

import { loadState, saveState } from './lib/storage'
import { DEFAULT_STATE, getDialogue, generateDiaryEntry } from './lib/gameData'

function todayStr() {
  return new Date().toDateString()
}

function initState() {
  const saved = loadState()
  if (!saved) return { ...DEFAULT_STATE }

  // Reset today's activities if it's a new day
  const isNewDay = saved.lastDate !== todayStr()
  return {
    ...DEFAULT_STATE,
    ...saved,
    phase: 'main', // skip boot on reload
    fatePoints: isNewDay ? 0 : saved.fatePoints,
    activitiesLoggedToday: isNewDay ? [] : saved.activitiesLoggedToday,
    lastDate: isNewDay ? todayStr() : saved.lastDate,
    streak: isNewDay ? (saved.streak || 0) + 1 : saved.streak,
    showActivityPanel: false,
    dialogue: isNewDay
      ? getDialogue('greeting')
      : saved.dialogue || getDialogue('greeting'),
  }
}

function useTime() {
  const [t, setT] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

export default function App() {
  const [state, setState] = useState(initState)
  const now = useTime()

  useEffect(() => {
    saveState(state)
  }, [state])

  const update = useCallback((patch) => {
    setState(prev => ({ ...prev, ...patch }))
  }, [])

  const handleBoot = () => {
    update({ phase: 'main', lastDate: todayStr(), dialogue: getDialogue('greeting') })
  }

  const handleLogActivity = (activity) => {
    setState(prev => {
      if (prev.activitiesLoggedToday.find(a => a.id === activity.id)) return prev

      const newFate = Math.min(prev.fatePoints + activity.points, prev.fateGoal)
      const newLogged = [...prev.activitiesLoggedToday, activity]

      // Update future path probabilities
      const newPaths = prev.futurePaths.map(path => {
        const delta = activity.pathEffects?.[path.id] || 0
        return { ...path, probability: Math.min(99, path.probability + delta) }
      })

      // Determine progress dialogue type
      const pct = newFate / prev.fateGoal
      let progressType = 'low'
      if (pct >= 1) progressType = 'complete'
      else if (pct >= 0.75) progressType = 'high'
      else if (pct >= 0.4) progressType = 'medium'

      const actDialogue = getDialogue('activity', activity.id)
      const progressDialogue = getDialogue('progress', progressType)
      const dialogue = pct >= 0.4 ? progressDialogue : actDialogue

      return {
        ...prev,
        fatePoints: newFate,
        activitiesLoggedToday: newLogged,
        futurePaths: newPaths,
        dialogue,
      }
    })
  }

  const handleGenerate = () => {
    setState(prev => {
      const message = generateDiaryEntry(
        prev.activitiesLoggedToday,
        prev.fatePoints,
        prev.futurePaths
      )
      const entry = {
        id: Date.now(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' }).toUpperCase(),
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
        activities: prev.activitiesLoggedToday.map(a => a.tag),
        message,
      }
      return {
        ...prev,
        diaryEntries: [entry, ...prev.diaryEntries].slice(0, 30),
        dialogue: "A new entry has been received.\nThe future recorded this moment.",
      }
    })
  }

  const handleDelete = (id) => {
    setState(prev => ({ ...prev, diaryEntries: prev.diaryEntries.filter(e => e.id !== id) }))
  }

  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit' }).toUpperCase()

  if (state.phase === 'boot') {
    return <BootSequence onComplete={handleBoot} />
  }

  const renderScreen = () => {
    switch (state.activeTab) {
      case 'journey':
        return (
          <JourneyScreen
            fatePoints={state.fatePoints}
            fateGoal={state.fateGoal}
            streak={state.streak}
            activitiesLogged={state.activitiesLoggedToday}
          />
        )
      case 'paths':
        return <FuturePathsScreen futurePaths={state.futurePaths} />
      case 'profile':
        return (
          <div className="profile-screen">
            <div className="profile-header">
              <div className="profile-avatar">◆</div>
              <div className="profile-name">{state.userName}</div>
              <div className="profile-title">Future Diary Holder</div>
            </div>
            <div className="profile-stats">
              <div className="profile-stat">
                <div className="profile-stat-val">{state.streak}</div>
                <div className="profile-stat-label">Day Streak</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-val">{state.diaryEntries.length}</div>
                <div className="profile-stat-label">Diary Entries</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-val">{state.fateGoal}</div>
                <div className="profile-stat-label">Daily Goal</div>
              </div>
            </div>
            <div className="profile-companion">
              <div className="profile-companion-label">COMPANION</div>
              <div className="profile-companion-name">Yuno · Active</div>
            </div>
            <div className="profile-diary-id">DIARY #0001</div>
          </div>
        )
      default: // diary
        return (
          <div className="diary-screen">
            <CharacterDisplay
              mood="neutral"
              fatePoints={state.fatePoints}
              fateGoal={state.fateGoal}
            />
            <DialogueBox
              text={state.dialogue}
              speaker="Yuno"
              onActivityOpen={() => update({ showActivityPanel: true })}
            />
            <DiaryFeed entries={state.diaryEntries} onDelete={handleDelete} />
          </div>
        )
    }
  }

  return (
    <div className="phone-shell">
      {/* Status bar */}
      <div className="status-bar">
        <div className="status-signal">
          <span className="signal-dot" /><span className="signal-dot" /><span className="signal-dot" />
        </div>
        <div className="status-time">{timeStr}</div>
        <div className="status-right">
          <span className="status-date">{dateStr}</span>
        </div>
      </div>

      {/* Main scrollable content */}
      <div className="screen-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={state.activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="screen-tab-content"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      <BottomNav activeTab={state.activeTab} onTabChange={tab => update({ activeTab: tab })} />

      {/* Activity drawer */}
      <ActivityPanel
        visible={state.showActivityPanel}
        loggedIds={state.activitiesLoggedToday.map(a => a.id)}
        onLog={handleLogActivity}
        onClose={() => update({ showActivityPanel: false })}
        onGenerate={handleGenerate}
      />
    </div>
  )
}
