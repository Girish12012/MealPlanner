# syntax=docker/dockerfile:1

FROM node:20-alpine AS deps

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

FROM node:20-alpine AS runtime

WORKDIR /app/src
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=deps /app/node_modules /app/node_modules
COPY --chown=node:node index.js index.html style.css script.js mealData.js ./

USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD node -e "const http=require('http');const req=http.get('http://127.0.0.1:'+process.env.PORT+'/api/health',res=>process.exit(res.statusCode===200?0:1));req.on('error',()=>process.exit(1));req.setTimeout(4000,()=>{req.destroy();process.exit(1);});"

CMD ["node", "index.js"]
