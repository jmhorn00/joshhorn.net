# ---------- Python runtime (Django) ----------
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    DJANGO_SETTINGS_MODULE=joshhorn.settings \
    PORT=8000

WORKDIR /app

# System deps (kept minimal)
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
     build-essential \
  && rm -rf /var/lib/apt/lists/*

# Python deps
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy Django project (manage.py lives here)
COPY joshhorn/ ./

# Collect static files via WhiteNoise (dummy key only used at build time)
RUN SECRET_KEY=dummy-build-only-key python manage.py collectstatic --noinput

EXPOSE 8000

# Apply migrations, then run Gunicorn.
# $PORT is set by Render.com (defaults to 8000 locally).
# $WEB_CONCURRENCY is set by Render.com based on available CPUs (defaults to 2 locally).
CMD ["sh", "-c", "python manage.py migrate --noinput && gunicorn joshhorn.wsgi:application --bind 0.0.0.0:$PORT --workers ${WEB_CONCURRENCY:-2} --timeout 60"]
