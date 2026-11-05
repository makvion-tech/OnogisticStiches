import { useEffect } from 'react'
import WaIcon from './WaIcon'
import { waItem } from '../lib/whatsapp'

// Full-size picture viewer. `items` = the pictures currently shown, `index` = which one is open.
export default function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index]
  const n = items.length

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onChange((index - 1 + n) % n)
      if (e.key === 'ArrowRight') onChange((index + 1) % n)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, n, onClose, onChange])

  if (!item) return null

  return (
    <div className="lb open" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="lb__btn lb__close" aria-label="Close" onClick={onClose}>
        <svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19" /></svg>
      </button>
      <button className="lb__btn lb__prev" aria-label="Previous" onClick={() => onChange((index - 1 + n) % n)}>
        <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" /></svg>
      </button>
      <button className="lb__btn lb__next" aria-label="Next" onClick={() => onChange((index + 1) % n)}>
        <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
      </button>
      {item.url && <img className="lb__img" src={item.url} alt={item.label} />}
      <a className="btn btn--wa" href={waItem(item.label)} target="_blank" rel="noopener noreferrer">
        <WaIcon /> Enquire on WhatsApp
      </a>
    </div>
  )
}