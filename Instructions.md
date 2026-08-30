

## Prompt for AI agent

Build a **single-page wedding invitation website** inspired by the attached reference images.

### High-level goal
Create an elegant, mobile-first wedding invitation website with a luxurious Arabic / classic romantic aesthetic. The experience should begin with a **closed invitation / door-style landing screen**, and then the user should **scroll down** to reveal the rest of the invitation details. The site is **front-end only** and must be easy to host on **GitHub Pages**.

### Technical constraints
- Use only **HTML, CSS, and vanilla JavaScript**
- Do **not** require any backend
- Do **not** include RSVP submission functionality
- Must work as a **static site** deployable on GitHub Pages
- No build tools required unless absolutely necessary
- Prefer a structure like:
  - `index.html`
  - `style.css`
  - `script.js`
  - `assets/` for images/fonts if needed
- Code should be clean, well-organized, and easy to customize

### Visual style
Match the feel of the reference images:
- Elegant, romantic, soft luxury
- Mobile-first layout that looks like a premium digital wedding card
- Color palette:
  - warm ivory / cream
  - taupe / mocha / muted brown
  - gold accents
  - very light floral or patterned background texture if tasteful
- Decorative corner ornaments / thin gold borders
- Soft shadows, subtle floating particles, and refined typography
- Smooth transitions and polished micro-animations
- Overall look should feel like an animated wedding invitation, not a generic website

### Required user experience
#### 1. Opening screen
- The first screen should look like a **closed invitation** or **double-door wedding card**
- Centered wax seal / emblem / monogram style detail
- Text near bottom like: “Tap to open” or “Scroll to begin”
- On first interaction:
  - either tap/click opens the invitation doors
  - or scrolling triggers the reveal
- After opening, smoothly transition into the invitation content below

#### 2. Scroll-driven invitation flow
As the user scrolls, reveal sections in order with elegant transitions:
- Hero / invitation section
- Couple names
- Introductory wedding message
- Countdown section
- Date section
- Calendar-style date highlight
- Event schedule / timeline
- Venue / location section
- Map or image section
- Closing section

### Required sections
#### A. Hero invitation section
Include:
- couple initials / monogram
- couple names
- short invitation message
- wedding venue city/location text
- subtle down-arrow encouraging scroll

#### B. Countdown section
Show a live countdown to the wedding date:
- days
- hours
- minutes
- seconds

Make the countdown elegant and centered.

#### C. Date section
Include:
- full wedding date
- month/year styling
- a small calendar-style layout with the wedding day highlighted

#### D. Event schedule section
Create a vertical elegant timeline with example items such as:
- Reception
- Ceremony
- Dinner
- Celebration / Dance
- Couple entrance

Make this easy to edit later.

#### E. Venue section
Include:
- venue name
- address lines
- event time
- date
- CTA button for directions

### Map requirement
Implement location in one of these two ways:

#### Preferred option
If easy and reliable in a static GitHub Pages site, include a simple embedded map widget using an iframe.

#### Fallback option
If the embedded map is awkward, unreliable, or visually poor, create a clearly styled **image placeholder section** for a venue/location photo or static map image instead.

Also:
- Add comments in the code showing where to replace the map embed URL
- Add comments showing where to replace the fallback image

### Content management
Use clearly labeled placeholder content and central configuration variables for easy editing:
- couple names
- initials
- event date/time
- venue name
- venue address
- map embed URL
- fallback location image
- invitation text
- schedule items

If possible, keep editable content in a single JS object at the top of `script.js`.

### Language / text direction
Build the site so it can support **Arabic**, including:
- proper **RTL layout**
- elegant Arabic typography support
- headings and spacing that look good in Arabic
- also keep the code organized so text can be switched to English if needed

### Responsive behavior
- Prioritize mobile design first
- Must also look good on tablets and desktop
- Content width should stay refined and invitation-like, not stretched too wide
- Smooth scrolling and proper spacing on small screens

### Animations and polish
Include tasteful animation, but keep performance good:
- opening invitation/door animation
- section fade/slide reveal on scroll
- subtle floating particles or decorative dots
- smooth button hover/tap states
- optional parallax or layered decorative background if lightweight

### Accessibility / quality
- Semantic HTML
- Good color contrast
- Reduced motion fallback for users who prefer less animation
- Fast loading
- No console errors
- No broken assets

### Deliverables
Provide the full code for:
- `index.html`
- `style.css`
- `script.js`

Also include:
1. clear comments for customization
2. instructions for how to deploy on GitHub Pages
3. instructions for where to replace text, date, names, and location
4. sample placeholder assets or notes for required images/fonts

### Important implementation notes
- Keep everything static and GitHub Pages compatible
- No RSVP form handling
- No database
- No server code
- Avoid dependencies unless truly necessary
- If external fonts are used, choose elegant ones suitable for Arabic and English
- Make the final result feel very close in spirit to the provided references:
  - decorative luxury invitation
  - closed first screen
  - scrolling reveal
  - romantic cream/taupe/gold theme

### Nice-to-have extras
If reasonable, include:
- background music toggle button placeholder, but keep it off by default
- a button to copy venue address
- a button to open directions in Google Maps
- a polished footer message

Before finalizing, make sure the site works by simply opening `index.html` locally and also works when hosted as a static site on GitHub Pages.

---

If you want, I can also make this even better by giving you:
1. a **shorter version** optimized for Claude / Cursor / Lovable, or  
2. a **super-detailed version** that tells the AI exactly how each section should look and animate.