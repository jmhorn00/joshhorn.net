# Deploying to a VPS

This project deploys via GitHub Actions → GitHub Container Registry (ghcr.io) → Watchtower on the VPS.

**Stack:** Astro (static build) · nginx · Docker · Traefik (SSL + reverse proxy) · Watchtower (auto-deploy)

---

## How it works

```
git push origin main
       ↓
GitHub Actions builds the Astro site into an nginx image → pushes to ghcr.io
       ↓
Watchtower on VPS polls ghcr.io every 60s → pulls new image → restarts web container
       ↓
Traefik routes joshhorn.net → web container (SSL via Let's Encrypt)
```

---

## One-time VPS setup

### 1. Install Docker

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER && newgrp docker
```

### 2. Clone the repo

```bash
sudo git clone https://github.com/jmhorn00/joshhorn.net /opt/joshhorn.net
cd /opt/joshhorn.net
```

### 3. Authenticate to ghcr.io (so Watchtower can pull)

Generate a GitHub Personal Access Token with `read:packages` scope at:
`github.com → Settings → Developer settings → Personal access tokens`

```bash
echo YOUR_GITHUB_PAT | docker login ghcr.io -u jmhorn00 --password-stdin
```

### 4. Point your domain DNS to the VPS

Add an **A record** for `joshhorn.net` and `www.joshhorn.net` pointing to your VPS IP.
Traefik needs this to complete the Let's Encrypt HTTP challenge.

### 5. Start everything

```bash
cd /opt/joshhorn.net
docker compose up -d
```

---

## GitHub setup

No secrets needed — the workflow uses the built-in `GITHUB_TOKEN`.

After the first push triggers a build, make the package public so Watchtower can pull without auth:

`github.com/jmhorn00 → Packages → joshhorn.net → Package settings → Change visibility → Public`

---

## Ongoing deploys

```bash
git push origin main
```

That's it. Watchtower picks up the new image within 60 seconds.

---

## Useful commands

```bash
# Check all containers are running
docker compose ps

# View logs
docker compose logs -f web
docker compose logs -f traefik

# Restart a single service
docker compose restart web

# Pull latest image manually
docker compose pull web && docker compose up -d web

# Build and run the image locally
docker build -t joshhorn.net . && docker run --rm -p 8080:80 joshhorn.net
```

---

## Troubleshooting

| Problem | Check |
|---------|-------|
| SSL cert not issued | DNS A record pointing to VPS? Run `docker compose logs traefik` |
| Site not loading | `docker compose ps` — is `web` up? Check `docker compose logs web` |
| Watchtower not updating | Is ghcr.io package public? Check `docker compose logs watchtower` |
