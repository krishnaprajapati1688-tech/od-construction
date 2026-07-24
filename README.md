# OD Construction — Final Production Version

The production-ready release. Built in place on the existing Next.js 14 / TypeScript /
Tailwind / Framer Motion / GSAP / Lenis v2 architecture — same routing, same components,
same design language — with the data layer rebuilt into a proper lightweight CMS, real
leadership photos, three projects moved to Completed, a brand-new Andheri project, a
redesigned Careers flow, and a filterable Gallery.

## 🆕 What changed in this release

### The CMS layer — `/data/`
Two files now run the entire site's content:

- **`/data/team.ts`** — leadership. Each entry: name, role, bio, and an `image` filename
  resolved against `/public/team/`. **To replace a photo, just overwrite the file in
  `/public/team/` (or point `image` at a new filename) — no component touches this data.**
- **`/data/projects.ts`** — every project. Each entry: `title`, `location`, `category`,
  `client`, `year`, `status` (`'ongoing' | 'completed'`), `description`, `heroImage`,
  optional `galleryImages`, optional `completionDate`. This is the **only file you edit**
  to add, update, or reclassify a project.

`src/lib/media.ts` resolves each project's images at build time: it uses the explicit
`heroImage` you set, and either your explicit `galleryImages` list or — if you leave that
out — every other image sitting in that project's folder. Either way, dropping a photo into
the folder is enough for it to show up.

### Adding a new project (full workflow)
1. `mkdir public/projects/<slug>` → drop in photos (name the cover shot anything, e.g.
   `hero-01.jpg`).
2. Add one object to `/data/projects.ts` with that `slug` and `heroImage` filename.
3. Done. The homepage, `/projects/ongoing` or `/projects/completed`, `/gallery`, and the
   full `/projects/<slug>` detail page (hero, gallery, status badge, progress bar) all
   generate automatically. No component is touched.

### The Ongoing → Completed system
Flip one field:
```ts
status: 'ongoing'   →   status: 'completed'
```
The website automatically: removes it from `/projects/ongoing`, adds it to
`/projects/completed`, swaps the badge to **Completed**, hides the progress bar, and shows
a "100% Complete · Handed Over" indicator instead. Nothing else needs to change — this
logic lives once, in `ProjectCard.tsx` and the `[slug]` detail page, both driven off
`project.status`.

**Applied in this release:** Kalwa West, Kanjur Marg (MES), and SPDC Mankhurd (MES) have
been moved from Ongoing to Completed, each with a `completionDate` added.

### New project — Andheri
`/projects/andheri-project` — built entirely from your uploaded photos (a tower-crane wide
shot as the hero, six site photos as the gallery: rebar/formwork, structural welding at
height, scaffolding, concrete pour, and foundation work). Category: Residential · Status:
Ongoing.

### CST Navy Nagar & Santacruz–Khar
Left unchanged, exactly as instructed — still running through the same auto-media system,
so replacing their photos later is just a file swap in `/public/projects/cst-navy-nagar/`
or `/public/projects/santacruz-khar/`.

### Leadership — now data-driven, with real photos
`LeadershipTeam.tsx` renders directly from `/data/team.ts` and `/public/team/`:
- **Omprakash Prajapati** — Founder & Owner
- **Ankit Prajapati** — Director
- **Krishna Prajapati** — Digital Operations Manager

Names and designations are unchanged, as instructed. Photos are your uploaded portraits,
cropped to a consistent 4:5 executive-card ratio.

### Gallery — now filterable
`/gallery` aggregates every image from every project in `/data/projects.ts` (tagged with
its category and status) and lets visitors filter by **Residential / Commercial /
Industrial / Government / Institutional / Renovation / Ongoing / Completed**, with the
same lightbox as before, plus a "View Project" link from inside the lightbox straight to
that project's detail page.

### Careers — redesigned with a real application flow
Each opening (Site Engineer, Site Supervisor, Civil Engineer, Project Manager) now has an
**Apply Now** button that opens a modal (`ApplyModal.tsx`) collecting Full Name, Phone,
Email, Experience, Current City, and a resume upload (PDF/DOC/DOCX, validated client-side).
**Send Resume** builds a `mailto:` link with:
- Subject: `Application | <Position>` (e.g. `Application | Site Engineer`)
- Body: pre-filled with all the applicant's details

...and opens the visitor's email app. No backend. As with any `mailto:` flow, the resume
file itself can't be auto-attached by a browser for security reasons — the modal tells the
applicant to attach it manually before hitting send in their email app, exactly as
specified.

### Navbar / logo polish
Refined the existing mark's spacing in the navbar — larger touch target, a subtle vertical
divider between mark and wordmark, a gentle rotate-on-hover micro-interaction. Company
identity, colors and the mark itself are unchanged.

### Contact
No map, no directions link — confirmed clean. Just Address, Phone, Email, Working Hours,
the contact form, and the floating WhatsApp / Call buttons.

### Stats (unchanged from v2, confirmed correct)
15+ Years · 80+ Completed Projects · 300+ Workforce · ₹5 Cr+ Company Value · Since 2008.

## 🚀 Getting started

```bash
npm install
npm run dev
```

## 🏗️ Build for production

```bash
npm run build
npm run start
```

> The build fetches Fraunces / Inter / IBM Plex Mono from Google Fonts at build time —
> make sure the build machine has internet access (works out of the box on Vercel/Netlify).

## 📁 What lives where

```
data/team.ts                     # ← edit this to update leadership
data/projects.ts                 # ← edit this to add/update/reclassify a project
public/team/                     # leadership photos
public/projects/<slug>/          # per-project photos
public/videos/projects/<slug>/   # per-project video (optional)
public/brand/                    # logo exports (svg/png) + brand-guidelines.html
src/lib/media.ts                 # resolves each project's images at build time
src/lib/data.ts                  # company info, stats, services, FAQs, testimonials, careers copy
src/components/ApplyModal.tsx    # careers application modal (mailto-based)
src/components/GalleryGrid.tsx   # filterable gallery + lightbox
src/app/projects/[slug]/         # auto-generated project detail page
```

Routing, Navbar, Footer, dark/light mode, floating buttons, and every animation system
(Framer Motion, GSAP, Lenis) are unchanged in structure from v2 — this release upgrades the
content layer and a few flows (Careers, Gallery), it does not rebuild the site.

---

Built for **OD Construction** · Mumbai, Maharashtra · Est. 2008
