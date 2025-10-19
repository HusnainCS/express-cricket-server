# ⚡ Express Server Task

A simple Node.js + Express application demonstrating modular JavaScript (ES Modules).  
This project shows how to organize code into separate modules, manage player data, run an Express server, and — directly inside this README — a lightweight cricket animation rendered with SVG.

---

<center>

<!-- Inline SVG animation: ball moves, bat swings -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 220" width="100%" height="220" aria-label="Cricket animation">
  <!-- background/outfield -->
  <rect width="100%" height="100%" fill="#7CC576"/>
  <!-- pitch -->
  <rect x="180" y="70" width="440" height="80" rx="6" fill="#C9A66B" stroke="#b08f4e" stroke-width="2"/>
  <!-- crease -->
  <rect x="190" y="78" width="420" height="64" fill="none" stroke="#ffffff" stroke-width="2" />
  <!-- bowler (left) -->
  <g transform="translate(100,110)">
    <circle cx="0" cy="-14" r="12" fill="#f7d6b6" />
    <rect x="-10" y="-2" width="20" height="34" fill="#2b7a78" rx="3" />
  </g>

  <!-- stumps (right end) -->
  <g transform="translate(620,100)">
    <rect x="-14" y="-12" width="4" height="28" fill="#8b5a2b"/>
    <rect x="-6"  y="-12" width="4" height="28" fill="#8b5a2b"/>
    <rect x="2"   y="-12" width="4" height="28" fill="#8b5a2b"/>
  </g>

  <!-- batsman group (positioned near right of pitch) -->
  <g id="batsman" transform="translate(580,110)">
    <!-- body -->
    <rect x="-14" y="0" width="28" height="36" rx="4" fill="#3a86ff"/>
    <!-- head -->
    <circle cx="0" cy="-18" r="12" fill="#f7d6b6"/>
    <!-- bat group pivot at (22,10) relative to batsman group -->
    <g id="bat" transform="translate(22,10) rotate(-18)">
      <!-- bat blade -->
      <rect x="6" y="-6" width="70" height="12" rx="3" fill="#ffd166" stroke="#6b4226" stroke-width="2"/>
      <!-- handle -->
      <rect x="0" y="-3" width="12" height="6" rx="3" fill="#6b4226"/>
      <!-- animate bat rotation (swing) -->
      <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        values="-18;70;-18"
                        dur="1.6s"
                        begin="ballMove.begin+0.82s"
                        repeatCount="indefinite" />
    </g>
  </g>

  <!-- ball (red) - moving left->right -->
  <g>
    <circle id="ball" cx="120" cy="110" r="9" fill="#d62828" stroke="#8b0000" stroke-width="1.2">
      <!-- animate cx across the pitch, label the animation so bat can reference begin time -->
      <animate id="ballMove" attributeName="cx"
               values="120;560;120"
               keyTimes="0;0.55;1"
               dur="1.8s"
               calcMode="spline"
               keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
               repeatCount="indefinite" />
      <!-- slight vertical wobble -->
      <animate attributeName="cy" values="110;103;110" dur="1.8s" repeatCount="indefinite"/>
    </circle>

    <!-- seam line (visual) -->
    <path d="M110 100 q10 10 20 0" stroke="#ffffff" stroke-width="1" fill="none" opacity="0.85">
      <animate attributeName="d" dur="1.8s" values="M110 100 q10 10 20 0; M120 105 q10 8 20 0; M110 100 q10 10 20 0" repeatCount="indefinite"/>
    </path>
  </g>

  <!-- subtle label -->
  <text x="12" y="18" font-family="Segoe UI, Arial" font-size="12" fill="#ffffff" opacity="0.9">Cricket animation — ball & bat (inline SVG)</text>

</svg>

</center>

---

## Project structure

Express-server-task/
│
├── package.json
├── package-lock.json
├── README.md
└── src/
│   ├── main.js
│   ├── modules.js
│   └── PlayersInfo.js
-

## Quick start

1. Clone
```bash
git clone https://github.com/<your-username>/Express-server-task.git
cd Express-server-task
```

2. Install
```bash
npm install
```

3. Run (dev)
```bash
npm run dev
```

Open http://localhost:3000 to see the full canvas animation the server serves, or view this README in a browser to see the inline SVG animation.

---

## Author

Husnain  
📍 Pakistan  
GitHub: https://github.com/HusnainCS

---

What I did: I embedded a compact SVG animation right inside this README so the cricket animation appears when the README is rendered in contexts that allow inline SVG animations. I also kept the previously added public/ canvas animation for the full interactive version you can serve from the Express app.

Would you like me to:
- convert the inline SVG to a base64 data-URI image (to improve compatibility),
- produce a downloadable animated GIF (I can provide instructions or a script to render it),
or
- move the SVG into the repository as an assets file and reference it from README with a relative path?
