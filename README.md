# ⚡ Express Server Task

A simple Node.js + Express application demonstrating modular JavaScript (ES Modules).  
This project shows how to organize code into separate modules, manage player data, and run an Express server with a development auto-reload option.

---

## About this project

This repository demonstrates a minimal Express server implemented with ES Modules (import/export). It separates concerns into small modules: player data, business logic, and the server entry point. It's ideal as a learning reference or starting point for small APIs.

---

## Built with

- Node.js (ES Modules)
- Express.js
- JavaScript (ESM)

---

## Project structure

Express-server-task/
│
├── package.json
├── package-lock.json
├── README.md
└── src/
    ├── main.js
    ├── modules.js
    └── PlayerInfo.js

---

## Features

- Modular code structure using ES Modules (import/export)
- Lightweight Express server with example routes for player data
- Development auto-reload using `node --watch`
- Easy to extend with more routes or data sources

---

## Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/HusnainCS/Express-server-task.git
cd Express-server-task
```

2. Install dependencies
```bash
npm install
```

3. Run in development mode (auto-reload)
```bash
npm run dev
```

Or run normally:
```bash
npm run start
```

Default server address:
http://localhost:3000

---

## npm scripts (example)

Add these scripts to your package.json if not already present:
```json
"scripts": {
  "start": "node src/main.js",
  "dev": "node --watch src/main.js"
}
```

- npm run start → Runs the project normally.
- npm run dev → Runs with auto-reload for development.

---

## How it works (files)

- src/main.js  
  Entry point. Starts the Express server, sets up routes, and imports logic from modules.js.

- src/modules.js  
  Contains application logic and route handlers. Imports player data from PlayerInfo.js.

- src/PlayerInfo.js  
  Contains player information (static or dynamic object/array) such as name, country, and highest score.

---

## Example output

When you run the project you might see console output similar to:
```
Server is running on http://localhost:3000
Player Name: Babar Azam
Highest Score: 158*
```

You can open your browser at http://localhost:3000 (or the endpoint you create) to see server responses.

---

## Author

Husnain  
📍 Pakistan  
GitHub: https://github.com/HusnainCS

---
