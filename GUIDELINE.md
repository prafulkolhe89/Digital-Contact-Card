# Digital Contact Card — Reusable Project Guideline

A step-by-step guide to create, customize, and deploy a digital contact card for any client. Follow this process to go from zero to a shareable WhatsApp link in under 30 minutes.

---

## Project Structure

```
your-project/
├── index.html            ← The contact card page (shared via link)
├── og-image.png          ← Social preview image (1200x630, shown on WhatsApp/Facebook)
├── og-image.svg          ← Source file for the OG image
├── whatsapp-poster.png   ← Full-size poster to share as image on WhatsApp
└── .gitignore
```

---

## Step 1: Copy the Template

Create a new folder for your client project:

```bash
mkdir ~/Downloads/Client-Name-Card
cd ~/Downloads/Client-Name-Card
git init
```

Copy `index.html` from this project into the new folder. This is your template.

---

## Step 2: Customize the Content

Open `index.html` and update these sections:

### A. Meta Tags (Lines 6–22)

These control what appears when the link is shared on WhatsApp/Facebook.

```html
<!-- Page title — shows in browser tab -->
<title>YOUR TITLE HERE</title>

<!-- WhatsApp / Facebook preview -->
<meta property="og:title" content="HEADLINE THAT HOOKS THE CLIENT" />
<meta property="og:description" content="SHORT DESCRIPTION OF YOUR OFFER" />
<meta property="og:url" content="https://YOUR-GITHUB.github.io/REPO-NAME/" />
<meta property="og:image" content="https://YOUR-GITHUB.github.io/REPO-NAME/og-image.png" />

<!-- Twitter preview -->
<meta name="twitter:title" content="SAME HEADLINE" />
<meta name="twitter:description" content="SAME DESCRIPTION" />
<meta name="twitter:image" content="https://YOUR-GITHUB.github.io/REPO-NAME/og-image.png" />
```

### B. Card Content

| What to change | Where in the HTML | Example |
|---|---|---|
| Top tag line | `.header .tag` | "Local Business Growth Setup" |
| Main headline | `.header h1` | "Your customers are searching..." |
| Orange highlight text | `.header h1 span` | "Are they finding you?" |
| Description | `.header p` | "We help local businesses..." |
| Highlight strip text | `.highlight-content span` | "LIVE in 5–10 Days" |
| Benefit box labels | `.benefit span` | "Website", "Google Visibility", "WhatsApp Leads" |
| Search term tags | `.tag-pill` | Industry-specific search terms |
| Loss aversion text | `.loss-box` | "Every day without..." |
| Urgency badge | `.footer-badge` | "Only 5 businesses onboarded this week" |

### C. Links (Most Important)

```html
<!-- "View Growth Page" button — link to your detailed offer page -->
<a class="btn-primary" href="YOUR_GROWTH_PAGE_URL_HERE" ...>

<!-- "Chat on WhatsApp" button — pre-filled WhatsApp message -->
<a class="btn-whatsapp" href="https://wa.me/YOUR_PHONE_NUMBER?text=YOUR_ENCODED_MESSAGE" ...>
```

**WhatsApp link format:**
- Phone number: country code + number, no spaces/dashes (e.g., `918657079725`)
- Message: URL-encoded text (use https://www.urlencoder.org)
- Example: `https://wa.me/918657079725?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20online`

### D. Colors (Optional)

Change the color palette in the `:root` CSS variables:

```css
:root {
  --background: hsl(45 100% 98%);     /* Page background — warm cream */
  --foreground: hsl(30 20% 20%);      /* Text color — dark brown */
  --primary: hsl(24 100% 55%);        /* Accent color — orange */
  --secondary: hsl(40 100% 95%);      /* Light accent — pale gold */
  --muted-foreground: hsl(30 15% 45%);/* Subtitle text — muted */
}
```

**Color ideas per industry:**
| Industry | Primary HSL | Vibe |
|---|---|---|
| Food/Restaurant | `hsl(0 80% 55%)` | Warm red |
| Health/Wellness | `hsl(160 60% 45%)` | Teal/green |
| Tech/IT | `hsl(220 80% 55%)` | Blue |
| Education | `hsl(260 60% 55%)` | Purple |
| Real Estate | `hsl(30 60% 45%)` | Earthy brown |
| Default/Business | `hsl(24 100% 55%)` | Orange (current) |

---

## Step 3: Create the OG Image

The OG image (1200x630px) is what WhatsApp shows as a preview when you share the link.

**Option A: Use an AI image generator**
Prompt example:
> "A premium marketing card, 1200x630, warm orange/cream palette. Headline: 'Your customers are searching online. Are they finding you?' with benefit boxes for Website, Google Visibility, WhatsApp Leads, and an orange CTA button."

**Option B: Use Canva**
- Go to canva.com → Custom Size → 1200x630 px
- Recreate the card design
- Export as PNG → save as `og-image.png`

**Option C: Edit the SVG template**
- Open `og-image.svg` in a text editor
- Change the text content
- Convert to PNG using: `rsvg-convert -w 1200 -h 630 og-image.svg -o og-image.png`

---

## Step 4: Create the WhatsApp Poster

This is a full-size image (1080x1920 or similar) shared directly as a photo on WhatsApp.

**Option A: Use an AI image generator**
Prompt example:
> "A mobile-sized (1080x1920) marketing poster with [your headline], [your benefits], [your CTA]. Clean modern design, [your color] palette."

**Option B: Use Canva**
- Template: Instagram Story (1080x1920)
- Recreate the card layout
- Export as PNG → save as `whatsapp-poster.png`

---

## Step 5: Deploy to GitHub Pages

### First-time setup (do once)

```bash
# Install GitHub CLI if needed
brew install gh

# Log in to GitHub
gh auth login --hostname github.com --git-protocol https --web
# Follow the browser prompts to authenticate

# Set up git auth
gh auth setup-git
```

### For each new project

```bash
# Navigate to your project
cd ~/Downloads/Client-Name-Card

# Initialize git and commit
git init
git add .
git commit -m "Initial contact card for [Client Name]"

# Create repo and push (--public makes it visible, needed for free GitHub Pages)
gh repo create Client-Name-Card --public --source=. --remote=origin --push

# Enable GitHub Pages
gh api repos/YOUR-GITHUB-USERNAME/Client-Name-Card/pages -X POST --input - <<'EOF'
{"source":{"branch":"main","path":"/"},"build_type":"legacy"}
EOF

# Trigger the first build
gh api repos/YOUR-GITHUB-USERNAME/Client-Name-Card/pages/builds -X POST
```

**Your live URL:** `https://YOUR-GITHUB-USERNAME.github.io/Client-Name-Card/`

Wait 1-2 minutes for the first deploy. Check status:
```bash
gh api repos/YOUR-GITHUB-USERNAME/Client-Name-Card/pages/builds/latest
```

### Updating after changes

```bash
git add .
git commit -m "Update card content"
git push origin main
```

GitHub Pages auto-rebuilds on push. Changes go live in ~1 minute.

---

## Step 6: Share on WhatsApp

You have two ways to share with a client:

### Method 1: Share the link (with rich preview)
Just paste the URL in the chat:
```
https://YOUR-GITHUB-USERNAME.github.io/Client-Name-Card/
```
WhatsApp auto-generates a preview card using your OG image and meta tags.

### Method 2: Share poster image + link (more prominent)
1. Send `whatsapp-poster.png` as a photo
2. In the caption, write:
```
Want more customers finding your business online?
Check this out 👇
https://YOUR-GITHUB-USERNAME.github.io/Client-Name-Card/
```

**Method 2 is recommended** — the full-size image grabs attention far better than a small link preview.

---

## Quick Checklist for New Projects

- [ ] Copy `index.html` template to new folder
- [ ] Update **headline** and **description** for the client's industry
- [ ] Update **search term tags** with relevant local searches
- [ ] Update **"View Growth Page"** button link
- [ ] Update **WhatsApp number** and pre-filled message
- [ ] Update **OG meta tags** (title, description, URL, image URL)
- [ ] Create **og-image.png** (1200x630)
- [ ] Create **whatsapp-poster.png** (1080x1920)
- [ ] Create GitHub repo and enable Pages
- [ ] Test the live URL on mobile
- [ ] Test WhatsApp sharing (send link to yourself first)
- [ ] Share with the client

---

## Troubleshooting

| Problem | Solution |
|---|---|
| GitHub Pages shows 404 | Trigger build manually: `gh api repos/.../pages/builds -X POST` |
| WhatsApp not showing preview | WhatsApp caches previews. Send the link to a new chat, or wait 24h for cache to refresh |
| OG image not showing | Make sure the image URL in meta tags matches exactly, including `https://` |
| Page looks broken on mobile | Test with Chrome DevTools mobile view before deploying |
| Want to change the URL | Rename the GitHub repo: Settings → General → Repository name |

---

## Reference: Current Project Values

| Field | Value |
|---|---|
| GitHub Username | `prafulkolhe89` |
| Repo Name | `Digital-Contact-Card` |
| Live URL | `https://prafulkolhe89.github.io/Digital-Contact-Card/` |
| Growth Page | `https://5ad09bb9-72ec-4f64-827c-228519f7dcf0-00-1lpd4g6izr9js.pike.replit.dev/` |
| WhatsApp Number | `918657079725` |
