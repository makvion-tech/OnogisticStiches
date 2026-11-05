import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SITE, BRAND_FIRST, BRAND_LAST } from '../config/site'
import { waLink } from '../lib/whatsapp'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="site-header">
      <div className="container">
        <Link className="logo" to="/">
          {BRAND_FIRST} <span>{BRAND_LAST}</span>
        </Link>
        <nav className={`nav${open ? ' is-open' : ''}`}>
          {SITE.nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <a className="icon-btn" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.4A8.4 8.4 0 1 1 21 11.5Z" /></svg>
          </a>
          <button className="icon-btn menu-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </div>
    </header>
  )
}
