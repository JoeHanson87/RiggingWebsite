# The Rigging Company Ltd

Website for **The Rigging Company Ltd** — a specialist rigging company for film, television and commercial productions across the UK.

Founded by **Matthew Newton**, **Callum Clements** and **Alex Glover**, all working Head of Department riggers.

---

## About the Site

A single-page scrolling website built with plain HTML, CSS and JavaScript. No frameworks or build tools required.

### Sections

1. **Hero** — Full-screen cinematic image with company name and tagline
2. **About** — Intro to the founders and company ethos
3. **The Work** — Full-width photography gallery with lightbox
4. **What We Do** — Services grid
5. **Selected Productions** — Broadcaster / streamer credits
6. **Contact** — Team contact numbers and footer

### Technical Highlights

- Dark theme — charcoal / black throughout
- Responsive: desktop, tablet (768px) and mobile (375px)
- Sticky navigation that becomes opaque on scroll; hamburger menu on mobile
- Scroll-reveal animations via Intersection Observer
- Gallery lightbox (click any image)
- Subtle hero parallax (respects `prefers-reduced-motion`)
- Semantic HTML5, ARIA labels, focus styles for accessibility
- Lazy-loaded gallery images for performance
- Open Graph meta tags for social sharing

---

## Files

```
RiggingWebsite/
├── index.html        # Single-page website
├── css/
│   └── styles.css    # All styles
├── js/
│   └── script.js     # Smooth scroll, nav, lightbox, animations
└── README.md
```

---

## Deployment — GitHub Pages

1. Go to the repository on GitHub: **Settings → Pages**
2. Under *Source*, select **Deploy from a branch**
3. Choose branch `main` and folder `/ (root)`
4. Click **Save**
5. After a minute or two, the site will be live at:
   `https://<your-username>.github.io/RiggingWebsite/`

> **Tip:** You can also drag the project folder into [Netlify Drop](https://app.netlify.com/drop) for an instant preview URL.

---

## Customisation

- **Hero image** — replace the Unsplash URL in `index.html` (`hero__img src`) with your own production photograph
- **Gallery images** — swap any `images.unsplash.com` URL in the gallery section for real production stills
- **Contact details** — update phone numbers and add email addresses once created
- **Fonts** — loaded from Google Fonts (`Bebas Neue` + `Inter`); can be self-hosted for privacy

---
