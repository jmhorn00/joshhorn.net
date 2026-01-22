# # ---------- 1) Frontend build (Vite) ----------
# FROM node:20-alpine AS frontend

# WORKDIR /app

# # Install node deps first (better caching)
# COPY package.json package-lock.json* ./
# RUN npm ci

# # Copy only what Vite needs (adjust if your Vite sources live elsewhere)
# COPY vite.config.js ./
# # If your Vite inputs live under your Django static src folder, copy the whole repo is simplest:
# COPY . .

# # Build Vite assets
# RUN npm run build


# ---------- 2) Python runtime (Django) ----------
FROM python:3.12-slim AS backend

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /joshhorn

# System deps (kept minimal)
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
     build-essential \
  && rm -rf /var/lib/apt/lists/*

# Python deps
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt \
    && pip install --no-cache-dir gunicorn

# Copy Django code
COPY . .

# Copy built frontend artifacts from the frontend stage
# This assumes your vite build outputs into a Django static folder (as configured in vite.config.js).
# If your build outputs elsewhere, change this to match.
#COPY --from=frontend /app/joshhorn/core/static /app/joshhorn/core/static

# Collect static (make sure settings.py has correct STATIC_ROOT)
# If your project uses a different settings module, adjust DJANGO_SETTINGS_MODULE
ENV DJANGO_SETTINGS_MODULE=joshhorn.settings
#RUN python manage.py collectstatic --noinput

EXPOSE 8000

# Run Gunicorn
CMD ["gunicorn", "joshhorn.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3", "--timeout", "60"]
