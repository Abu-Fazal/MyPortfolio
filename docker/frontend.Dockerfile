# Stage 1: Development & Build Stage
FROM node:20-alpine AS dev

WORKDIR /app

# Copy root workspace configurations
COPY package.json .npmrc ./
COPY frontend/package.json ./frontend/

# Install frontend dependencies
RUN npm install --workspace=frontend

# Copy frontend source code
COPY frontend ./frontend

EXPOSE 5173

CMD ["npm", "run", "dev", "--workspace=frontend", "--", "--host", "0.0.0.0"]

# Stage 2: Production Build & Nginx Serving
FROM dev AS builder
RUN npm run build --workspace=frontend

FROM nginx:alpine AS prod
# Copy core nginx configuration and modular includes
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/conf.d/ /etc/nginx/conf.d/
COPY docker/nginx/error-pages/ /usr/share/nginx/html/error-pages/

# Copy built frontend assets
COPY --from=builder /app/frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
