/* ─── useT: returns translations for current language ─── */
import { useLang } from '../context/LangContext'
import en from '../i18n/en'
import ru from '../i18n/ru'

export function useT() {
  const { lang } = useLang()
  return lang === 'ru' ? ru : en
}
