// Finds your photos automatically. Just save them in src/assets/images/
// with the right names (see config/site.js). No code changes needed.
const files = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const byName = {}
for (const [path, url] of Object.entries(files)) {
  const name = path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase()
  byName[name] = url
}

function series(prefix) {
  const out = []
  for (let n = 1; ; n++) {
    const key = `${prefix}-${String(n).padStart(2, '0')}`
    if (!byName[key]) break
    out.push(byName[key])
  }
  return out
}

export const heroImages = series('hero')
export const ownerImage = byName['owner'] || null
export const aboutSecondImage = byName['about-2'] || null

const pad = (n) => String(n).padStart(2, '0')
const designs = series('design')

function build() {
  const items = designs.map((url, i) => ({ url, cat: 'designs', label: `Design ${pad(i + 1)}` }))
  if (!items.length) {
    // no photos yet: show gold placeholders so the layout is visible
    const heights = [1.25, 1.0, 1.4, 1.15, 1.3, 1.05, 1.35, 1.2, 1.1]
    heights.forEach((h, i) => items.push({ url: null, cat: 'designs', label: `Design ${pad(i + 1)}`, h }))
  }
  return items
}

export const galleryItems = build()