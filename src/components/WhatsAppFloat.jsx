import WaIcon from './WaIcon'
import { waLink } from '../lib/whatsapp'

// Floating button on desktop, black bottom bar on mobile.
export default function WhatsAppFloat() {
  return (
    <>
      <a className="wa-float" href={waLink()} target="_blank" rel="noopener noreferrer">
        <WaIcon /> WhatsApp Us
      </a>
      <div className="mobile-bar">
        <small>&#9679; Nationwide</small>
        <a href={waLink()} target="_blank" rel="noopener noreferrer">
          <WaIcon /> WhatsApp Us
        </a>
      </div>
    </>
  )
}
