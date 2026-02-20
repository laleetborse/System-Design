# System-Design

Exploring and learning system design concepts with runnable examples.

---

## Branches

Each branch is a self-contained example. Switch to a branch to see its code and run it.

| Branch | What it does |
|--------|----------------|
| **[load_balancer](https://github.com/laleetborse/System-Design/tree/load_balancer)** | **Nginx load balancer** in front of two Node.js backends. A static frontend (port 8080) calls the load balancer (port 8081), which round-robins requests to `node_app1` and `node_app2`. All services run in Docker. Good for trying L7 load balancing, Docker networking, and CORS. |
| **[protobuf](https://github.com/laleetborse/System-Design/tree/protobuf)** | **Protocol Buffers** example: `person.proto` and Node.js server with Docker/nginx setup. |
| **[main](https://github.com/laleetborse/System-Design/tree/main)** | Default branch; minimal project scaffold. |

### Quick start (load_balancer)

```bash
git checkout load_balancer
docker compose up --build
```

- Frontend: **http://localhost:8080**
- API (via nginx): **http://localhost:8081/api/**
