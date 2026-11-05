import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import { galleryItems } from '../lib/images'
import { useReveal } from '../hooks/useReveal'

const FILTERS = [
  ['all', 'All'],
  ['designs', 'Designs'],
  ['naturals', 'Naturals'],
]
const fromHash = (h) => {
  const v = h.replace('#', '')
  return v === 'designs' || v === 'naturals' ? v : 'all'
}

export default function Gallery() {
  const { hash } = useLocation()
  const [filter, setFilter] = useState(fromHash(hash))
  const [open, setOpen] = useState(null)
  useEffect(() => setFilter(fromHash(hash)), [hash])

  const visible = galleryItems.filter((i) => filter === 'all' || i.cat === filter)
  const ref = useReveal([filter])
  const close = useCallback(() => setOpen(null), [])

  const pick = (f) => {
    setFilter(f)
    history.replaceState(null, '', f === 'all' ? '/gallery' : `/gallery#${f}`)
  }

  return (
    <div ref={ref}>
      <div className="container banner">
        <span className="eyebrow">The Gallery</span>
        <h1>All the <em>work</em></h1>
        <p>Tap any picture to view it larger and enquire on WhatsApp.</p>
      </div>

      <section className="container">
        <div className="filters">
          {FILTERS.map(([key, label]) => (
            <button key={key} className={`filter-btn${filter === key ? ' active' : ''}`} onClick={() => pick(key)}>
              {label}
            </button>
          ))}
          <span className="count">
            {visible.length} {visible.length === 1 ? 'piece' : 'pieces'}
          </span>
        </div>

        <div className="masonry">
          {visible.map((it, k) => (
            <figure key={it.label} className="shot reveal" onClick={() => setOpen(k)}>
              {it.url ? (
                <img className="shot__img" loading="lazy" src={it.url} alt={it.label} />
              ) : (
                <div className={`shot__img ph v${1 + (k % 4)}`} style={{ aspectRatio: `1 / ${it.h}` }} />
              )}
              <figcaption>
                <span>{it.label}</span>
                <b>{it.cat === 'designs' ? 'Designs' : 'Naturals'}</b>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {open !== null && <Lightbox items={visible} index={open} onClose={close} onChange={setOpen} />}
    </div>
  )
}
