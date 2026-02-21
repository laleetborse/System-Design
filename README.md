---

# 🚀 Docker Load Balancer & Reverse Proxy System

This project demonstrates a professional-grade web architecture using **Nginx** as a Load Balancer and Reverse Proxy to manage traffic between a frontend and multiple backend instances.

## 🏗️ Architecture Overview

The system consists of four containers running on a **private virtual bridge network**:

1. **Nginx (The Gatekeeper):** The only container exposed to the internet. It listens on port `8080` of your computer and routes traffic internally.
2. **Frontend:** A container serving the UI.
3. **Node App 1 & 2 (The Backend):** Two identical instances of a Node.js API to handle heavy traffic.

---

## 📡 How Networking Works Here

### 1. The Automatic Bridge

Even though no network is explicitly defined in the `docker-compose.yaml`, Docker Compose creates a **Default Bridge Network**. All containers are "plugged" into this virtual switch, allowing them to talk to each other using their service names (e.g., `http://frontend` or `http://node_app1`).

### 2. Service Discovery (Internal DNS)

Inside the `nginx.conf`, we use names like `node_app1:3000`.

* **How?** Docker provides an internal DNS server. When Nginx asks "Where is `node_app1`?", Docker's DNS returns the private IP of that specific container.

### 3. Load Balancing (Upstream)

Your `nginx.conf` uses an `upstream` block:

```nginx
upstream backend {
    server node_app1:3000;
    server node_app2:3000;
}

```

Nginx uses a **Round-Robin** algorithm by default. It sends the first API request to `node_app1` and the next to `node_app2`, doubling your backend capacity.

---

## 🔄 The Request Flow (Step-by-Step)

1. **The User:** Opens a browser and types `http://localhost:8080`.
2. **The Entry:** The request hits your computer's port `8080`, which Docker maps to **Nginx** on port `80`.
3. **Nginx Routing:**
* **If path is `/api/...`:** Nginx forwards the request to the `backend` upstream (App 1 or App 2).
* **If path is `/` (everything else):** Nginx forwards the request to the `frontend` container.


4. **The Response:** The chosen container processes the request and sends data back through Nginx to the user's browser.

---

## 🛠️ Configuration Details

### Docker Compose

* **`build: .`**: Both `node_app1` and `node_app2` use the same Dockerfile in the root directory.
* **`ports: ["8080:80"]`**: Only Nginx is reachable from outside. Your apps and frontend are safely hidden inside the Docker network.
* **`depends_on`**: Ensures the apps start before Nginx tries to connect to them.

### Nginx Config

* **`proxy_pass`**: Acts as a "tunnel," passing the request from the public entry point to the private container.
* **`proxy_set_header`**: Passes the user's real IP address to the backend apps (otherwise, the apps would think every request came from Nginx).

---

## 🚀 How to Run

1. **Start the system:**
```bash
docker-compose up -d

```


2. **Access the UI:**
Open [http://localhost:8080](https://www.google.com/search?q=http://localhost:8080)
3. **Test Load Balancing:**
Check your terminal logs (`docker-compose logs -f`) while refreshing the page. you will see requests being shared between `node_app1` and `node_app2`.

---

## 📝 Key Learnings for Future Me

* **DNS over IPs:** Always use service names (`node_app1`) in config files; never hardcode IP addresses.
* **Port Mapping:** Host Port (`8080`) is for the user; Container Port (`80`) is for the internal network.
* **Security:** By not giving `node_app1` a `ports` section, I have "firewalled" it from the internet. Only Nginx can talk to it.
