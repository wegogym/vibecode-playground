const KEY = 'fp_v2'

export function loadState() {
  try { return JSON.parse(localStorage.getItem(KEY)) }
  catch { return null }
}

export function saveState(s) {
  localStorage.setItem(KEY, JSON.stringify(s))
}

export function clearState() {
  localStorage.removeItem(KEY)
}
