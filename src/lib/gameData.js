export const ACTIVITIES = [
  { id: 'workout', name: 'Workout', icon: '⚡', points: 20, tag: 'PHYSICAL',
    pathEffects: { engineer: 0, creator: 0, entrepreneur: 1 } },
  { id: 'coding', name: 'Coding', icon: '◈', points: 30, tag: 'DIGITAL',
    pathEffects: { engineer: 3, creator: 0, entrepreneur: 1 } },
  { id: 'studying', name: 'Studying', icon: '◉', points: 20, tag: 'MENTAL',
    pathEffects: { engineer: 2, creator: 1, entrepreneur: 1 } },
  { id: 'cardio', name: 'Cardio', icon: '♦', points: 15, tag: 'VITAL',
    pathEffects: { engineer: 0, creator: 0, entrepreneur: 1 } },
  { id: 'content', name: 'Content Creation', icon: '★', points: 15, tag: 'SIGNAL',
    pathEffects: { engineer: 0, creator: 5, entrepreneur: 2 } },
]

export const FUTURE_PATHS = [
  { id: 'engineer', name: 'Software Engineer', icon: '◈', color: '#00f5ff', probability: 45 },
  { id: 'creator', name: 'Content Creator', icon: '★', color: '#ff6b9d', probability: 28 },
  { id: 'entrepreneur', name: 'Entrepreneur', icon: '◆', color: '#a855f7', probability: 27 },
]

const DIALOGUE_POOLS = {
  greeting: [
    "Good morning.\nYour future is still being written.",
    "You're here.\nThe diary has been waiting for you.",
    "I've been watching the timeline.\nToday's fate is... uncertain.",
    "Another entry. Another day.\nI'll be watching.",
  ],
  activity: {
    workout: [
      "Physical strength noted.\nThe future responds to this.",
      "Your body becomes the weapon.\nI can see it in the timeline.",
    ],
    coding: [
      "Your Software Engineer path just brightened.\nI can see it clearly now.",
      "Lines of code. Lines of fate.\nThey're the same thing.",
    ],
    studying: [
      "You studied.\nSomewhere in the future, that matters enormously.",
      "Knowledge accumulates quietly.\nBut its weight shifts everything.",
    ],
    cardio: [
      "Endurance noted.\nThe body and mind's futures are connected.",
      "You ran.\nThe timeline shifted slightly. That's not nothing.",
    ],
    content: [
      "You created something.\nThe world is slightly different now because of it.",
      "Your Content Creator path activated.\nI watched it happen.",
    ],
  },
  progress: {
    low: [
      "The fate bar is still low.\nBut there is still time.",
      "You've started.\nThat already separates you from most.",
    ],
    medium: [
      "You're halfway there.\nThe future is starting to stabilize.",
      "I can see a shape forming in the timeline.\nKeep going.",
    ],
    high: [
      "Almost there.\nThe future is very close to secured.",
      "The probability is shifting in your favor.\nDon't stop now.",
    ],
    complete: [
      "Today's future has been secured.\nI knew you could do it.",
      "FATE STABLE.\nThis day will echo forward in ways you can't imagine.",
      "The diary has recorded today.\nYou did it.",
    ],
  },
  idle: [
    "The timeline grows uncertain without action.\nWhat will you choose?",
    "Every minute is a branching point.\nWhich path are you walking?",
    "I'm still here.\nThe diary is open. Write your future.",
  ],
}

export function getDialogue(type, subtype = null) {
  const pool = subtype ? DIALOGUE_POOLS[type]?.[subtype] : DIALOGUE_POOLS[type]
  if (!pool || !pool.length) return "The future is uncertain."
  const arr = Array.isArray(pool) ? pool : [pool]
  return arr[Math.floor(Math.random() * arr.length)]
}

export function generateDiaryEntry(activities, fatePoints, futurePaths) {
  const topPath = [...futurePaths].sort((a, b) => b.probability - a.probability)[0]
  const actNames = activities.map(a => a.name.toLowerCase())
  const futureDays = Math.floor(Math.random() * 600) + 180

  const templates = [
    `You almost didn't ${actNames[0] || 'show up'} today.\n${futureDays} days later, that decision appeared in ways you didn't expect.\nThe ${topPath.name} path is responding.`,
    `The version of you that exists in ${futureDays} days\nremembered this moment specifically.\nNot the big things. This one.`,
    `Fate probability update:\n${topPath.name} — ${topPath.probability}%\n\nThe future isn't fixed.\nBut today you moved it.`,
    `${fatePoints} fate points.\nIt doesn't sound like much.\nBut future-you knows exactly what this day cost — and what it built.`,
    `There was a version of today where you did nothing.\nThat timeline is gone now.\nYou replaced it with this one.`,
  ]

  return templates[Math.floor(Math.random() * templates.length)]
}

export const DEFAULT_STATE = {
  phase: 'boot',
  activeTab: 'diary',
  userName: 'Unknown',
  fatePoints: 0,
  fateGoal: 100,
  streak: 0,
  lastDate: null,
  activitiesLoggedToday: [],
  futurePaths: FUTURE_PATHS.map(p => ({ ...p })),
  diaryEntries: [],
  dialogue: "The diary has been activated.\nYour future is now being recorded.",
  showActivityPanel: false,
}
