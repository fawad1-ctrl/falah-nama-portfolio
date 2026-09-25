# Falah Nama – Agency Portfolio

## 📁 File Structure

```
falah-nama/
├── index.html        ← Main page (Hero, Services, Demos, Pricing, Reviews)
├── portfolio.html    ← Portfolio with filter tabs
├── contact.html      ← Contact form + info
├── about.html        ← Agency story & values
├── css/
│   └── style.css     ← All shared styles
└── js/
    ├── main.js       ← Counters, form, modal, WhatsApp toggle
    ├── nav.js        ← Injects shared navigation
    └── footer.js     ← Injects shared footer
```

**To edit navigation or footer:** change `js/nav.js` or `js/footer.js` once — it updates every page automatically.

---

## 🐛 Bugs Fixed from Original

1. **`@tailwindcss/browser@4` CDN** — replaced with standard Tailwind CDN (the browser v4 tag was causing errors)
2. **"Most Popular" badge** — was using `absolute` inside a non-positioned parent; fixed with `pricing-popular` class
3. **Copyright year** — hard-coded as 2024; now auto-updates via JS every year
4. **Broken portfolio image** — `photo-1491553895911-0055uj6e` was a broken Unsplash URL; replaced
5. **`fab fa-meta`** — Font Awesome 6 free tier doesn't include Meta logo; replaced with `fab fa-facebook`
6. **Form submit** — original used `alert()`; replaced with in-page success state
7. **Counter data-suffix** — counters now show "8" (not "8+") for Years Experience
8. **Mobile menu close** — clicking a link now closes the mobile menu properly

---

## 🚀 Deploy to GitHub Pages (Free — Today)

### Step 1 – Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2 – Create a repository
- Click **New repository**
- Name it exactly: `falahnama` (or `falah-nama`)
- Set to **Public**
- Click **Create repository**

### Step 3 – Upload your files
On the new repo page:
- Click **uploading an existing file**
- Drag ALL files and folders (index.html, portfolio.html, contact.html, about.html, css/, js/)
- Commit message: "Initial upload"
- Click **Commit changes**

### Step 4 – Enable GitHub Pages
- Go to **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: **main**, folder: **/ (root)**
- Click **Save**

Your site will be live in ~2 minutes at:
`https://YOUR-GITHUB-USERNAME.github.io/falahnama/`

---

## 🌐 Custom Domain (falahnama.pk)

### Option A – Namecheap.pk (Recommended for .pk)
1. Buy domain at https://namecheap.com or https://pknic.net.pk
2. Cost: ~PKR 2,000–4,000/year for .pk

### Option B – GitHub Pages + Custom Domain (Free hosting)
After buying domain:
1. In your repo, create a file called `CNAME` (no extension)
2. Inside it write: `www.falahnama.pk`
3. At your domain registrar, add these DNS records:
   ```
   Type: A     Name: @   Value: 185.199.108.153
   Type: A     Name: @   Value: 185.199.109.153
   Type: CNAME Name: www Value: YOUR-USERNAME.github.io
   ```
4. In GitHub Pages settings, enter your custom domain
5. Check "Enforce HTTPS"

### Option C – Paid Hosting (If you need PHP/email)
- **Hostinger PK**: ~PKR 800/month (includes domain + email)
- **SiteGround**: Better performance, higher cost
- For a static HTML site, GitHub Pages is completely free and fast enough.

---

## 📬 Make the Contact Form Actually Send Emails

The current form shows a success message but doesn't email you. Fix this with **Formspree** (free):

1. Go to https://formspree.io and create a free account
2. Create a new form — you'll get an endpoint like `https://formspree.io/f/XXXXXXXX`
3. In `contact.html`, change the `<form>` tag to:
   ```html
   <form id="contactForm" action="https://formspree.io/f/XXXXXXXX" method="POST">
   ```
4. Remove the `e.preventDefault()` submit handler from `main.js` for this form (or keep it and use fetch)

Free plan: 50 submissions/month. Upgrade for more.

---

## 💼 What Projects to Add to Portfolio

### Starter projects (build these as demos — even if no real client yet):

| Niche | What to Build | Why it Sells |
|-------|--------------|--------------|
| **Restaurant** | Menu site + WhatsApp order button | Every dhaba/cafe wants this |
| **Doctor / Clinic** | Appointment booking page | High demand in all cities |
| **Real Estate Agent** | Property listing page | Easy upsell to monthly retainer |
| **Fashion Store** | Product gallery + order form | Huge market in Lahore/Karachi |
| **Academy / Tutor** | Course listing + admission form | Growing ed-tech demand |
| **Salon/Beauty** | Service menu + WhatsApp booking | Works in every city |
| **Car Dealership** | Vehicle listing with WhatsApp | High-value projects |
| **Catering Service** | Menu + booking form | Events market is big |

### Where to get real project images:
- **Unsplash** (https://unsplash.com) — Free photos
- **Freepik** (https://freepik.com) — Mockups & UI screenshots
- **Dribbble** (https://dribbble.com) — UI inspiration (don't copy, use for reference)
- **Screenshot your own demo sites** — best option; shows clients real work

### How to get your first clients:
1. Build 3–4 demo sites for local niches (restaurant, clinic, salon)
2. Post on **Facebook Groups** (Lahore Business Network, Karachi Startups, etc.)
3. Post on **LinkedIn** — target small business owners
4. **Cold WhatsApp** — find local businesses with no website, send them a demo
5. **Fiverr / Upwork** — for international clients
6. Add to your portfolio page immediately after each project

---

## ✅ Pre-Launch Checklist

- [ ] Replace `+92 300 1234567` with your real WhatsApp number
- [ ] Replace `hello@falahnama.pk` with your real email
- [ ] Replace Lahore office address with your real location
- [ ] Replace placeholder portfolio images with real project screenshots
- [ ] Replace all `href="#"` portfolio links with actual live URLs
- [ ] Connect contact form to Formspree or EmailJS
- [ ] Test on mobile (Android & iPhone)
- [ ] Test all navigation links
- [ ] Add Google Analytics (free at analytics.google.com)
- [ ] Submit sitemap to Google Search Console
