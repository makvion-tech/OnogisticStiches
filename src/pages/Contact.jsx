import WaIcon from '../components/WaIcon'
import { SITE } from '../config/site'
import { waLink } from '../lib/whatsapp'
import { useReveal } from '../hooks/useReveal'

const MEASUREMENTS = ['Bust', 'Waist', 'Hip', 'Shoulder width', 'Sleeve length', 'Full length (shoulder to hem)']

const FAQ = [
  ['How do I order?', "Message us on WhatsApp with the piece you like. We'll guide you through the rest."],
  ['Do you deliver outside Lagos?', "Yes, we deliver nationwide. Message us with your location and we'll confirm the details."],
  ['How long does a piece take?', "It depends on the piece. Tell us what you want on WhatsApp and we'll confirm the timeline."],
  ['Can I request something not in the gallery?', "Of course. Send a photo or describe it and we'll let you know how we can make it."],
]

export default function Contact() {
  const ref = useReveal()
  return (
    <div ref={ref}>
      <section className="container banner contact-hero">
        <div>
          <span className="eyebrow">Contact &amp; Ordering</span>
          <h1>Let's <em>talk</em></h1>
          <p>Everything happens on WhatsApp. Send a message and we'll reply as soon as we can.</p>
        </div>
        <div className="reveal">
          <div className="eyebrow" style={{ marginBottom: 6 }}>WhatsApp</div>
          <div className="phone">{SITE.displayPhone}</div>
          <a className="btn btn--wa" href={waLink()} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Chat on WhatsApp
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="reveal">
            <span className="eyebrow">Ordering</span>
            <h2>How an order <em>works</em></h2>
          </div>
          <div className="steps steps--list">
            <div className="step reveal">
              <div className="step__n">1</div>
              <h3>Pick your piece</h3>
              <p>Choose from the gallery, or describe something new. Send us the piece name, such as "Design 02".</p>
            </div>
            <div className="step reveal">
              <div className="step__n">2</div>
              <h3>Share your measurements</h3>
              <p>We'll ask for your measurements (see the list below) and any style preferences.</p>
            </div>
            <div className="step reveal">
              <div className="step__n">3</div>
              <h3>We confirm and deliver</h3>
              <p>We agree the details with you on WhatsApp, then deliver nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container reveal measure-wrap">
        <span className="eyebrow">Measurements</span>
        <h2>Have these <em>ready</em></h2>
        <ul className="measure" style={{ padding: 0, margin: 0 }}>
          {MEASUREMENTS.map((m, k) => (
            <li key={m}><b>{String(k + 1).padStart(2, '0')}</b> {m}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="reveal">
            <span className="eyebrow">Questions</span>
            <h2>Good to <em>know</em></h2>
          </div>
          <div className="faq reveal">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}