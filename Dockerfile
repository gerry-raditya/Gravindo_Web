# Stage 1: Build using Bun
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy dependencies
COPY package*.json bunfig.toml ./
RUN bun install

# Copy entire project
COPY . .

# Build client (Vite)
RUN bun run build:client


# Stage 2: Serve static with Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
