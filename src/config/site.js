// ------------------------------------------------------------
// SITE CONFIG: the one place to edit brand details.
// WhatsApp number format: country code + number, no "+" or spaces.
//
// PICTURES: save them in src/assets/images/ with these names
// (two digits, no gaps; .jpg, .jpeg, .png or .webp):
//   hero-01, hero-02, ...        home page slider
//   design-01, design-02, ...    gallery: Designs
//   natural-01, natural-02, ...  gallery: Naturals
//   owner                        About page portrait
//   about-2                      optional second About picture
// ------------------------------------------------------------
export const SITE = {
  brand: 'Onogistic Stiches',
  whatsappNumber: '2348035167036',
  displayPhone: '0803 516 7036',
  defaultMessage: "Hello! I saw your portfolio and I'd like to make an enquiry.",
  nav: [
    { label: 'Home', to: '/' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
}

// "Onogistic Stiches" -> ["Onogistic", "Stiches"] (last word is styled in gold)
const words = SITE.brand.split(' ')
export const BRAND_LAST = words.pop()
export const BRAND_FIRST = words.join(' ')
