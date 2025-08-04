# ====================
# 1️⃣ Builder Stage
# ====================
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# ============================
# 2️⃣ Final Stage (Tiny Image)
# ============================
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy only the built app and necessary files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

# Set environment
# ENV NODE_ENV production
# ENV PORT 3000

EXPOSE 3000

# Start app
CMD ["npm", "start"]
