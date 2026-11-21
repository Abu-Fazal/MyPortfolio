# Node.js 20 Alpine lightweight base image
FROM node:20-alpine AS base

WORKDIR /app

# Install curl for healthcheck
RUN apk add --no-cache curl

# Copy root workspace configurations
COPY package.json .npmrc ./
COPY backend/package.json ./backend/

# Install backend dependencies
RUN npm install --workspace=backend

# Copy backend source code
COPY backend ./backend

EXPOSE 5000

ENV NODE_ENV=development
ENV PORT=5000

CMD ["npm", "run", "dev", "--workspace=backend"]
