/**
 * Prepends Vite's BASE_URL to a public asset path.
 * In dev (base: '/') → path unchanged.
 * In production (base: '/portfolio_react/') → /portfolio_react/icons/...
 */
const base = import.meta.env.BASE_URL

export function asset(path) {
  if (!path) return path
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${base}${clean}`
}
