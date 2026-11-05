import { SITE } from '../config/site'

export const waLink = (msg) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg || SITE.defaultMessage)}`

export const waItem = (label) =>
  waLink(`Hello! I'm interested in "${label}" from your gallery. Is it available?`)
