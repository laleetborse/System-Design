# Portfolio - Laleet Borse

Personal portfolio built with React, Tailwind CSS, and Vite. Containerized with Docker and served via Nginx.

## Tech Stack

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Frontend  | React 19, Tailwind CSS 4, Vite 7   |
| Animation | Framer Motion                       |
| Server    | Nginx (alpine-slim)                 |
| Container | Docker multi-stage build            |

## Quick Start

### Development

```bash
cd frontend
npm install
npm run dev        # → http://localhost:3000
```

### Production (Docker)

```bash
docker compose up --build -d    # → http://localhost:8080
```

### Cleanup

```bash
# Stop and remove containers
docker compose down

# Remove build cache and dangling images to free disk space
docker system prune -f
docker builder prune -f
```

## Architecture

### How the Docker Build Works

The Dockerfile uses a **multi-stage build** -- two completely separate stages:

```
┌─────────────────────────────────────────────────┐
│  STAGE 1: "build" (node:22-alpine)              │
│                                                  │
│  1. Copies package.json                          │
│  2. Runs npm install (178 packages, ~200MB)      │
│  3. Copies source code                           │
│  4. Runs vite build → outputs /app/dist (~400KB) │
│                                                  │
│  ❌ This entire stage is DISCARDED after build    │
│     Node.js, node_modules, source code — gone.   │
└──────────────────────┬──────────────────────────┘
                       │ only /app/dist is copied
                       ▼
┌─────────────────────────────────────────────────┐
│  STAGE 2: final image (nginx:alpine-slim)        │
│                                                  │
│  1. Copies /app/dist → /usr/share/nginx/html     │
│  2. Copies nginx.conf                            │
│  3. Creates non-root user "app"                  │
│  4. Serves static files on port 80               │
│                                                  │
│  ✅ Final image: ~14MB (nginx + your HTML/JS/CSS)│
└─────────────────────────────────────────────────┘
```

**Why multi-stage?** Without it, the image would include Node.js, npm, and all `node_modules` (~400MB+). Multi-stage gives you a production image that's **14MB** -- just the web server and your compiled assets.

### How Nginx Works

Nginx is a high-performance web server. Here it serves your React app as static files:

```
Browser request
      │
      ▼
┌─────────────┐
│   Nginx     │  Listens on port 80 inside container
│   :80       │  Mapped to port 8080 on your machine
└──────┬──────┘
       │
       ├── GET /                    → serves index.html
       ├── GET /about               → serves index.html (SPA fallback)
       ├── GET /assets/index.js     → serves JS file (cached 1 year)
       └── GET /assets/index.css    → serves CSS file (cached 1 year)
```

**Key configuration explained (`nginx.conf`):**

| Directive | What it does |
| --- | --- |
| `try_files $uri $uri/ /index.html` | SPA routing — any route that doesn't match a real file falls back to `index.html`, letting React Router handle it client-side |
| `gzip on` | Compresses responses on-the-fly. Your 378KB JS bundle becomes ~125KB over the wire |
| `sendfile on` | Kernel-level file serving — bypasses userspace copying, much faster |
| `tcp_nopush` + `tcp_nodelay` | Optimizes TCP packet delivery for static assets |
| `expires 1y` + `Cache-Control: immutable` | Tells browsers to cache JS/CSS/images for 1 year. Vite adds content hashes to filenames (`index-BKaepIsG.js`), so new deploys get new filenames automatically |
| `worker_connections 512` | Max concurrent connections per worker process |

### Docker Compose

Maps container port 80 → host port 8080 and restarts automatically on failure:

```
Host machine                    Docker container
:8080  ──────────────────────►  nginx :80  →  /usr/share/nginx/html/
```

### Security

- Runs as non-root user `app` inside the container
- No Node.js runtime in production (reduced attack surface)
- Only static files are served (no server-side code execution)

## Project Structure

```
System-Design/
├── Dockerfile              # Multi-stage build
├── docker-compose.yml      # Container orchestration
├── nginx.conf              # Web server config
├── .dockerignore           # Excludes node_modules from build context
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.jsx
        ├── index.css           # Tailwind + theme tokens (light/dark)
        ├── App.jsx
        ├── hooks/
        │   └── useTheme.js     # Dark/light mode with localStorage
        ├── components/
        │   ├── Navbar.jsx
        │   ├── Hero.jsx
        │   ├── About.jsx
        │   ├── Skills.jsx
        │   ├── Projects.jsx
        │   ├── Contact.jsx
        │   └── Footer.jsx
        └── constants/
            └── data.js         # All portfolio content (edit here)
```

## Customization

Edit `frontend/src/constants/data.js` to update:
- Skills and technologies
- Project cards
- Social links
- Contact information
