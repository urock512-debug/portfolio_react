/* ─── Language Context ─── */
import { createContext, useContext } from 'react'
import { useLocation } from 'react-router-dom'

export const LangContext = createContext({ lang: 'en' })

export function LangProvider({ children }) {
  const { pathname } = useLocation()
  const lang = pathname.startsWith('/ru') ? 'ru' : 'en'
  return (
    <LangContext.Provider value={{ lang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
