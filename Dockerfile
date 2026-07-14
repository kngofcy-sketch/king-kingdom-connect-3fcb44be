# ---- Stage 1: Build ----
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (use bun if lockfile exists, otherwise npm)
COPY package.json bun.lock* package-lock.json* ./
RUN apk add --no-cache curl bash && \
    npm install -g bun && \
    bun install --frozen-lockfile || bun install

# Copy source and build static output
COPY . .
RUN bun run build

# ---- Stage 2: Serve ----
FROM nginx:alpine AS runner

# Custom nginx config for SPA routing on port 3000
RUN rm /etc/nginx/conf.d/default.conf
COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen 3000;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    gzip_min_length 1024;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(?:css|js|woff2?|ttf|otf|eot|ico|svg|png|jpg|jpeg|gif|webp|avif)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Copy built static assets — TanStack Start build outputs to dist/client by default;
# fall back to dist if that's the only directory present.
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
