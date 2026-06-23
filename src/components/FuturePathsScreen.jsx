import { motion } from 'framer-motion'

const PATH_DESCRIPTIONS = {
  engineer: "Masters code. Builds systems. The future where logic wins.",
  creator: "Creates content. Shapes culture. The future where expression wins.",
  entrepreneur: "Builds companies. Takes risks. The future where vision wins.",
}

function PathCard({ path, index }) {
  return (
    <motion.div
      className="path-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      style={{ '--path-color': path.color }}
    >
      <div className="path-card-header">
        <span className="path-card-icon" style={{ color: path.color, textShadow: `0 0 10px ${path.color}` }}>
          {path.icon}
        </span>
        <div className="path-card-info">
          <div className="path-card-name">{path.name}</div>
          <div className="path-card-desc">{PATH_DESCRIPTIONS[path.id]}</div>
        </div>
        <div className="path-card-pct" style={{ color: path.color }}>
          {path.probability}%
        </div>
      </div>
      <div className="path-bar-track">
        <motion.div
          className="path-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${path.probability}%` }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: index * 0.1 + 0.2 }}
          style={{ background: `linear-gradient(90deg, ${path.color}88, ${path.color})` }}
        />
      </div>
      <div className="path-card-footer">
        <span className="path-card-status">
          {path.probability >= 70 ? '▲ CONVERGING' : path.probability >= 40 ? '◈ ACTIVE' : '◇ LATENT'}
        </span>
        <span className="path-card-stability">
          {path.probability >= 70 ? 'HIGH STABILITY' : path.probability >= 40 ? 'MEDIUM STABILITY' : 'LOW STABILITY'}
        </span>
      </div>
    </motion.div>
  )
}

export default function FuturePathsScreen({ futurePaths }) {
  const top = [...futurePaths].sort((a, b) => b.probability - a.probability)[0]

  return (
    <div className="paths-screen">
      <div className="paths-header">
        <div className="paths-title">FUTURE PATHS</div>
        <div className="paths-subtitle">Your actions shape which timeline becomes real</div>
      </div>

      <div className="paths-dominant">
        <span className="paths-dominant-label">DOMINANT FUTURE</span>
        <span className="paths-dominant-name" style={{ color: top.color, textShadow: `0 0 10px ${top.color}` }}>
          {top.icon} {top.name}
        </span>
        <span className="paths-dominant-pct">{top.probability}%</span>
      </div>

      <div className="paths-list">
        {futurePaths.map((path, i) => (
          <PathCard key={path.id} path={path} index={i} />
        ))}
      </div>

      <div className="paths-note">
        Probabilities update as you log fate actions each day.
      </div>
    </div>
  )
}
