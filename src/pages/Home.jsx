import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import WaIcon from '../components/WaIcon'
import { galleryItems } from '../lib/images'
import { waLink } from '../lib/whatsapp'
import { useReveal } from '../hooks/useReveal'

const bg = (url) => (url ? { backgroundImage: `url('${url}')` } : undefined)

export default function Home() {
  const ref = useReveal()
  const recent = galleryItems.slice(0, 6)
  const first = galleryItems[0]
  const thumb = (cat) => galleryItems.find((x) => x.cat === cat && x.url)

  return (
    <div ref={ref}>
      <Hero />

      {/* INTRO */}
      <section className="section">
        <div className="container intro">
          <div className="reveal">
            <div className="numeral">01</div>
            <span className="eyebrow">The House</span>
            <h2>Cut with care, <em>worn with pride</em></h2>
            <p className="lead">
              Every piece in the gallery is made to be worn and remembered. Take a look around, then message us on
              WhatsApp about anything you love.
            </p>
            <Link className="link-arrow" to="/gallery">Enter the gallery</Link>
          </div>
          <div className="frame arch intro__img reveal">
            <div className={`pic${first.url ? '' : ' ph'}`} style={bg(first.url)} />
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="section section--flush">
        <div className="container">
          <div className="head-row reveal">
            <div>
              <span className="eyebrow">Recent Work</span>
              <h2>Fresh from the <em>studio</em></h2>
            </div>
            <Link className="link-arrow" to="/gallery">See everything</Link>
          </div>
          <div className="stagger">
            {recent.map((it, k) => (
              <Link key={it.label} className="tile reveal" to={`/gallery#${it.cat}`}>
                <div className={`pic${it.url ? '' : ` ph v${1 + (k % 4)}`}`} style={bg(it.url)} />
                <span className="tile__tag">{it.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container reveal">
        <div className="cats">
          {[
            ['I', 'Designs', 'designs'],
            ['II', 'Naturals', 'naturals'],
          ].map(([n, title, cat]) => {
            const t = thumb(cat)
            return (
              <Link key={cat} className="cat" to={`/gallery#${cat}`}>
                <span className="cat__n">{n}</span>
                <span className="cat__t">{title}</span>
                <span className={`cat__thumb${t ? '' : ' ph'}`} style={bg(t && t.url)} />
                <span className="cat__go">View</span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="head-row head-row--center reveal">
            <div>
              <span className="eyebrow">How It Works</span>
              <h2>Three simple <em>steps</em></h2>
            </div>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="step__n">1</div>
              <h3>Choose a piece</h3>
              <p>Browse the gallery and note the name of the one you like, for example "Design 04".</p>
            </div>
            <div className="step reveal">
              <div className="step__n">2</div>
              <h3>Message us</h3>
              <p>Tap any WhatsApp button. The piece you picked is filled into the message for you.</p>
            </div>
            <div className="step reveal">
              <div className="step__n">3</div>
              <h3>We take it from here</h3>
              <p>We confirm the details with you on WhatsApp, and we deliver nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta reveal">
        <h2>Have something <em>in mind?</em></h2>
        <p>Send us a message and tell us what you're dreaming up.</p>
        <a className="btn btn--wa" href={waLink()} target="_blank" rel="noopener noreferrer">
          <WaIcon /> Chat on WhatsApp
        </a>
      </section>
    </div>
  )
}
