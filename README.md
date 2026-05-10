# Digital Manufacturing Blog — 6E7V0013
### Manchester Metropolitan University | 2025–26

A reflective blog documenting the digital manufacturing journey for module **6E7V0013 Digital Manufacturing**.

This blog covers: 3D printing of phone casings, metrology & scanning, PFMEA, process capability (Cp/Cpk), reverse engineering, Tecnomatix Plant Simulation, and Industry 4.0 concepts — all through the lens of the **Phones-R-Us** manufacturing scenario (50,000 phones/year target).

---

## 📁 File Structure

```
digital-manufacturing-blog/
├── index.html              ← Home page (post feed + hero)
├── about.html              ← About page
├── README.md               ← This file
├── css/
│   └── style.css           ← All styles (one file)
├── js/
│   ├── main.js             ← Interactive behaviour (nav, scroll, animations)
│   └── components.js       ← Shared component helpers (not required — optional)
└── posts/
    ├── week1.html          ← Introduction & Blog Setup
    ├── week2.html          ← FESTO CP Lab Observations
    ├── week3.html          ← 3D Printing — Machine Selection & First Prints
    ├── week4.html          ← Metrology & Scanning
    ├── week5.html          ← Process Capability (Cp, Cpk, PFMEA)
    ├── week6.html          ← Reverse Engineering the Top Casing
    ├── week7.html          ← Tecnomatix Plant Simulation
    ├── week8.html          ← Hitting 50,000 Phones/Year
    └── week9.html          ← Lessons Learnt & Reflection
```

---

## 🚀 Deploying to GitHub Pages

1. Create a new **public** repository on GitHub (e.g. `digital-mfg-blog`)
2. Clone it locally: `git clone https://github.com/YOUR-USERNAME/digital-mfg-blog.git`
3. Copy all files from this folder into the cloned repo
4. Commit and push:
   ```bash
   git add .
   git commit -m "Initial blog deployment"
   git push origin main
   ```
5. In the repo Settings → **Pages** → Source: **Deploy from branch** → Branch: `main` / `/ (root)`
6. Your blog will be live at: `https://YOUR-USERNAME.github.io/digital-mfg-blog/`

No build tools, no Node.js, no dependencies — pure HTML/CSS/JS. ✓

---

## ✏️ Customisation Guide

### Replace placeholder text
Search for `[Your Name]` across all files and replace with your actual name.
Search for `[✏️` to find all content placeholders that need your real data.

### Add photos
- Replace `<div class="placeholder">` blocks with `<img>` tags
- Place images in an `assets/img/` folder you create
- Reference them as `../assets/img/your-photo.jpg` from within the `posts/` folder

### Add YouTube videos
Replace `<div class="video-placeholder">` blocks with:
```html
<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:10px; margin:2rem 0;">
  <iframe 
    src="https://www.youtube.com/embed/YOUR-VIDEO-ID"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
    allowfullscreen
    title="Your video title"
  ></iframe>
</div>
```

### Update the measurement table (Week 4)
Fill in your actual measured values and change `PASS`/`FAIL` text accordingly.

### Update the simulation table (Week 7 & 8)
Replace all `[✏️]` placeholders with your actual Tecnomatix data.

---

## 🎨 Design Notes

- **Font**: DM Serif Display (headings) + DM Sans (body) — loaded via Google Fonts CDN
- **Accent colour**: Deep teal (`#1a6b6b`) — change via `--teal` CSS variable in `css/style.css`
- **No JavaScript frameworks** — works offline and on GitHub Pages without any build step
- **Mobile responsive** — tested down to 320px width

---

## 📋 Marking Criteria Alignment

| Blog Element | Marking Criteria Coverage |
|---|---|
| Weekly posts (9 total, dated) | Consistent spread of evidence over the unit |
| Photo galleries with captions | Multimedia evidence of practical work |
| YouTube video embeds | Video documentation requirement |
| Reference sections (per post) | Background reading / peer-reviewed sources |
| Measurement data tables | Process documentation |
| Tecnomatix screenshots | Plant simulation evidence |
| Reflection sections | Critical analysis and personal voice |
| Callout boxes | Key insights highlighted |

---

*Module: 6E7V0013 Digital Manufacturing · Manchester Metropolitan University · Lead Assessor: Raul Ochoa Cabrero*
