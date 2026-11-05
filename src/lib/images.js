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
const naturals = series('natural')

function build() {
  const items = []
  const max = Math.max(designs.length, naturals.length)
  for (let i = 0; i < max; i++) {
    if (designs[i]) items.push({ url: designs[i], cat: 'designs', label: `Design ${pad(i + 1)}` })
    if (naturals[i]) items.push({ url: naturals[i], cat: 'naturals', label: `Natural ${pad(i + 1)}` })
  }
  if (!items.length) {
    // no photos yet: show gold placeholders so the layout is visible
    const heights = [1.25, 1.0, 1.4, 1.15, 1.3, 1.05, 1.35, 1.2, 1.1]
    for (let i = 0; i < 9; i++) {
      const natural = i % 2 === 1
      items.push({
        url: null,
        cat: natural ? 'naturals' : 'designs',
        label: `${natural ? 'Natural' : 'Design'} ${pad(Math.floor(i / 2) + 1)}`,
        h: heights[i],
      })
    }
  }
  return items
}

export const galleryItems = build()
