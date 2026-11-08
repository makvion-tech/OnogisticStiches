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
          {/* Owner portrait: save as src/assets/images/owner.jpg */}
          <div className="portrait reveal">
            <div className="frame arch">
              <div className={`pic${ownerImage ? '' : ' ph'}`} style={bg(ownerImage)} />
            </div>
          </div>

          <div className="reveal">
            <span className="eyebrow">Meet the Maker</span>
            <h1>The hands behind <em>the thread</em></h1>
            <p>
              Welcome to Onogistic Stitches. Every piece we make begins with a simple belief: clothes should fit your
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

      {/* Sewing photo: save as src/assets/images/about-2.jpg (section shows once the photo exists) */}
      {aboutSecondImage && (
        <section className="section studio">
          <div className="container studio__grid">
            <div className="reveal">
              <span className="eyebrow">In the Studio</span>
              <h2>Where every piece <em>takes shape</em></h2>
              <p>
                Every stitch is placed with care, from the first cut of fabric to the final press. This is where your
                idea becomes something you can wear.
              </p>
            </div>
            <div className="studio__photo frame reveal">
              <div className="pic" style={bg(aboutSecondImage)} />
            </div>
          </div>
        </section>
      )}

      <section className="container reveal">
        <div className="values">
          <div className="value"><b>01</b><div><h3>Designs</h3><p>Tailored pieces cut and finished with attention to fit and detail.</p></div></div>
          <div className="value"><b>02</b><div><h3>Nationwide</h3><p>We deliver across the country. Message us on WhatsApp to arrange it.</p></div></div>
        </div>
      </section>
    </div>
  )
}