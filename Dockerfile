FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
RUN addgroup --system app && adduser --system --ingroup app app && \
    npm install -g serve
COPY --from=build /app/dist ./dist
USER app
EXPOSE 4321
CMD ["serve", "dist", "-l", "4321", "--no-clipboard"]
