FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=30001
EXPOSE 30001
CMD node ./dist/server/entry.mjs
