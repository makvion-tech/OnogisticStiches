import { useCallback, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import { galleryItems } from '../lib/images'
import { useReveal } from '../hooks/useReveal'

// How many pictures fit on one "page". Change this number to fit more or fewer.
const PER_PAGE = 12

// 1 … 4 5 6 … 12
function pageList(page, pages) {
  const nums = [...new Set([1, pages, page - 1, page, page + 1])]
    .filter((n) => n >= 1 && n <= pages)
    .sort((a, b) => a - b)
  const out = []
  nums.forEach((n, i) => {
    if (i && n - nums[i - 1] > 1) out.push('gap' + n)
    out.push(n)
  })
  return out
}

export default function Gallery() {
  const [params, setParams] = useSearchParams()
  const [open, setOpen] = useState(null)
  const gridTop = useRef(null)

  const pages = Math.max(1, Math.ceil(galleryItems.length / PER_PAGE))
  const page = Math.min(Math.max(parseInt(params.get('page'), 10) || 1, 1), pages)
  const items = galleryItems.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const ref = useReveal([page])
  const close = useCallback(() => setOpen(null), [])

  const goTo = (n) => {
    setOpen(null)
    setParams(n === 1 ? {} : { page: n })
    const y = gridTop.current.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
  }

  return (
    <div ref={ref}>
      <div className="container banner">
        <span className="eyebrow">The Gallery</span>
        <h1>All the <em>work</em></h1>
        <p>Tap any picture to view it larger and enquire on WhatsApp.</p>
      </div>

      <section className="container">
        <div className="masonry" style={{ marginTop: 24 }} ref={gridTop}>
          {items.map((it, k) => (
            <figure key={it.label} className="shot reveal" onClick={() => setOpen(k)}>
              {it.url ? (
                <img className="shot__img" loading="lazy" src={it.url} alt={it.label} />
              ) : (
                <div className={`shot__img ph v${1 + (k % 4)}`} style={{ aspectRatio: `1 / ${it.h}` }} />
              )}
            </figure>
          ))}
        </div>

        {pages > 1 && (
          <nav className="pager" aria-label="Gallery pages">
            <button className="pager__nav" disabled={page === 1} onClick={() => goTo(page - 1)} aria-label="Previous page">
              &#8249;
            </button>
            <span className="pager__nums">
              {pageList(page, pages).map((n) =>
                typeof n === 'string' ? (
                  <span key={n} className="pager__gap">&hellip;</span>
                ) : (
                  <button
                    key={n}
                    className={n === page ? 'is-current' : ''}
                    aria-current={n === page ? 'page' : undefined}
                    onClick={() => goTo(n)}
                  >
                    {n}
                  </button>
                ),
              )}
            </span>
            <span className="pager__label">Page {page} of {pages}</span>
            <button className="pager__nav" disabled={page === pages} onClick={() => goTo(page + 1)} aria-label="Next page">
              &#8250;
            </button>
          </nav>
        )}
      </section>

      {open !== null && <Lightbox items={items} index={open} onClose={close} onChange={setOpen} />}
    </div>
  )
}