import { useCallback, useState } from 'react'
import Lightbox from '../components/Lightbox'
import { galleryItems } from '../lib/images'
import { useReveal } from '../hooks/useReveal'

export default function Gallery() {
  const [open, setOpen] = useState(null)
  const ref = useReveal()
  const close = useCallback(() => setOpen(null), [])

  return (
    <div ref={ref}>
      <div className="container banner">
        <span className="eyebrow">The Gallery</span>
        <h1>All the <em>work</em></h1>
        <p>Tap any picture to view it larger and enquire on WhatsApp.</p>
      </div>

      <section className="container">
        <div className="filters">
          <span className="count" style={{ marginLeft: 0 }}>
            {galleryItems.length} {galleryItems.length === 1 ? 'piece' : 'pieces'}
          </span>
        </div>

        <div className="masonry">
          {galleryItems.map((it, k) => (
            <figure key={it.label} className="shot reveal" onClick={() => setOpen(k)}>
              {it.url ? (
                <img className="shot__img" loading="lazy" src={it.url} alt={it.label} />
              ) : (
                <div className={`shot__img ph v${1 + (k % 4)}`} style={{ aspectRatio: `1 / ${it.h}` }} />
              )}
            </figure>
          ))}
        </div>
      </section>

      {open !== null && <Lightbox items={galleryItems} index={open} onClose={close} onChange={setOpen} />}
    </div>
  )
}