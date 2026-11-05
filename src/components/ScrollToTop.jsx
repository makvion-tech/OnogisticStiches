import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the top whenever the page changes (unless going to a #section).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
