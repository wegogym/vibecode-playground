// Pixel-art Yuno sprite (side view, facing right) with a 2-frame walk cycle.
// Frames are defined as character grids; each char maps to a palette color.

const PALETTE = {
  o: '#7d2f56', // outline / dark plum
  H: '#ff9ec7', // hair pink
  L: '#ffcfe4', // hair highlight
  S: '#ffe4d1', // skin
  s: '#eec0ab', // skin shadow
  W: '#f6eefc', // sailor collar
  E: '#8a1f4d', // eye
  U: '#5164a8', // uniform blue
  u: '#39477e', // uniform dark / skirt
  R: '#e0245e', // ribbon
  B: '#43263b', // shoes
}

// Rows 0-18: head, twin-tail, torso, skirt (shared by all frames)
const HEAD_BODY = [
  '......oooo......',
  '....ooHHHHoo....',
  '...oHHHHHHHHo...',
  '..oHHHHHHHHHHo..',
  '..oHHLHHHHHHHo..',
  '..oHHooSSSSSo...',
  '.ooHHoSSSSSSSo..',
  '.oHHHoSSSSSESo..',
  '.oHoHoSSSSSSSo..',
  '.oHoHoSSSSSsso..',
  '.oHo.ooSSSSoo...',
  '.oHo...oSSo.....',
  '.oHo..ooWWoo....',
  '.oHo.oUUWWUUo...',
  '.ooo.oUURRUUo...',
  '.....oUUUUUUo...',
  '.....ouuuuuuo...',
  '....ouuuuuuuuo..',
  '...ouuuuuuuuuuo.',
]

// Rows 19-23: legs — stride frame
const LEGS_STRIDE = [
  '....oSSo..oSSo..',
  '....oSo....oSo..',
  '...oSo......oSo.',
  '...oBBo....oBBo.',
  '...oBBo....oBBo.',
]

// Rows 19-23: legs — passing frame
const LEGS_PASS = [
  '......oSSSSo....',
  '......oSSSSo....',
  '......oSo.oSo...',
  '.....oBBooBBo...',
  '.....oBBooBBo...',
]

// Rows 19-23: legs — standing still
const LEGS_IDLE = [
  '.....oSSooSSo...',
  '.....oSSooSSo...',
  '.....oSo..oSo...',
  '....oBBo..oBBo..',
  '....oBBo..oBBo..',
]

// Convert a grid into horizontal-run rects for a compact SVG
function frameRects(rows) {
  const rects = []
  rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const c = row[x]
      if (!PALETTE[c]) { x++; continue }
      let end = x + 1
      while (end < row.length && row[end] === c) end++
      rects.push({ x, y, w: end - x, fill: PALETTE[c] })
      x = end
    }
  })
  return rects
}

const FRAME_STRIDE = frameRects([...HEAD_BODY, ...LEGS_STRIDE])
const FRAME_PASS = frameRects([...HEAD_BODY, ...LEGS_PASS])
const FRAME_IDLE = frameRects([...HEAD_BODY, ...LEGS_IDLE])

function Frame({ rects, className }) {
  return (
    <g className={className}>
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={1} fill={r.fill} />
      ))}
    </g>
  )
}

export default function YunoSprite({ walking = true, size = 56 }) {
  return (
    <svg
      className="yuno-sprite"
      viewBox="0 0 16 24"
      width={size}
      height={size * 1.5}
      shapeRendering="crispEdges"
      aria-label="Yuno sprite"
    >
      {walking ? (
        <>
          <Frame rects={FRAME_STRIDE} className="sprite-frame sprite-frame--a" />
          <Frame rects={FRAME_PASS} className="sprite-frame sprite-frame--b" />
        </>
      ) : (
        <Frame rects={FRAME_IDLE} className="sprite-frame" />
      )}
    </svg>
  )
}
