import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BRAND_FIRST, BRAND_LAST } from '../config/site'
import { heroImages } from '../lib/images'

const SLIDES = heroImages.length ? heroImages : [null]

export default function Hero() {
  const [i, setI] = useState(0)
  const timer = useRef(null)
  const count = SLIDES.length

  const restart = useCallback(() => {
    clearInterval(timer.current)
    if (count > 1) timer.current = setInterval(() => setI((n) => (n + 1) % count), 6000)
  }, [count])

  useEffect(() => {
    restart()
    return () => clearInterval(timer.current)
  }, [restart])

  const go = (n) => {
    setI((n + count) % count)
    restart()
  }

  return (
    <section className={`hero${count < 2 ? ' is-single' : ''}`}>
      <div className="hero__slides">
        {SLIDES.map((url, n) => {
          const bg = url ? { backgroundImage: `url('${url}')` } : { background: 'linear-gradient(135deg,#6b5a3a,#2b2619)' }
          const ph = url ? bg : { background: 'linear-gradient(160deg,#9a8458,#4a3f27)' }
          return (
            <div key={n} className={`hero__slide${n === i ? ' is-active' : ''}`}>
              <div className="hero__bg" style={bg} />
              <div className="hero__photo" style={ph} />
            </div>
          )
        })}
      </div>

      <div className="hero__content">
        <h1 className="hero__title">
          {BRAND_FIRST} <em>{BRAND_LAST}</em>
        </h1>
        <div className="hero__sub">
          <span>Designs</span>
          <span>Naturals</span>
        </div>
        <div className="hero__ctas">
          <Link className="btn btn--solid" to="/gallery#designs">Explore Designs</Link>
          <Link className="btn btn--ghost" to="/gallery#naturals">Explore Naturals</Link>
        </div>
      </div>

      <button className="hero__arrow hero__arrow--prev" aria-label="Previous" onClick={() => go(i - 1)}>
        <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" /></svg>
      </button>
      <button className="hero__arrow hero__arrow--next" aria-label="Next" onClick={() => go(i + 1)}>
        <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="hero__dots">
        {SLIDES.map((_, n) => (
          <button key={n} aria-label={`Slide ${n + 1}`} className={n === i ? 'is-active' : ''} onClick={() => go(n)} />
        ))}
      </div>
    </section>
  )
}
