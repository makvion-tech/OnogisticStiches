import { ownerImage, aboutSecondImage } from '../lib/images'
import { waLink } from '../lib/whatsapp'
import { useReveal } from '../hooks/useReveal'

const bg = (url) => (url ? { backgroundImage: `url('${url}')` } : undefined)

export default function About() {
  const ref = useReveal()
  return (
    <div ref={ref}>
      <section className="section section--tight">
        <div className="container about">
          {/* Owner portrait: save as src/assets/images/owner.jpg (optional second: about-2.jpg) */}
          <div className="portrait reveal">
            <div className="frame arch">
              <div className={`pic${ownerImage ? '' : ' ph'}`} style={bg(ownerImage)} />
            </div>
            {aboutSecondImage && <div className="portrait__small has" style={bg(aboutSecondImage)} />}
          </div>

          <div className="reveal">
            <span className="eyebrow">Meet the Maker</span>
            <h1>The hands behind <em>the thread</em></h1>
            <p>
              Welcome to Onogistic Stiches. Every piece we make begins with a simple belief: clothes should fit your
              body, suit your story and make you feel like the best version of yourself.
            </p>
            <p>
              From bold to classic, each outfit is cut, stitched and finished by hand with close attention to
              detail. Whether it is for an occasion or for every day, we take the time to get it right.
            </p>
            <div className="quote">Made for you, made with care, and made to be remembered.</div>
            <a className="btn btn--gold" href={waLink()} target="_blank" rel="noopener noreferrer">Message Us</a>
          </div>
        </div>
      </section>

      <section className="container reveal">
        <div className="values">
          <div className="value"><b>01</b><div><h3>Designs</h3><p>Tailored pieces cut and finished with attention to fit and detail.</p></div></div>
          <div className="value"><b>02</b><div><h3>Nationwide</h3><p>We deliver across the country. Message us on WhatsApp to arrange it.</p></div></div>
        </div>
      </section>
    </div>
  )
}