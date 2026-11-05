import { Link } from 'react-router-dom'
import { SITE, BRAND_FIRST, BRAND_LAST } from '../config/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Link className="logo" to="/">
          {BRAND_FIRST} <span>{BRAND_LAST}</span>
        </Link>
        <nav>
          {SITE.nav.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </nav>
        <small>
          &copy; {new Date().getFullYear()} {SITE.brand}
        </small>
      </div>
    </footer>
  )
}
