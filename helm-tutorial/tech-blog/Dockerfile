FROM --platform=linux/amd64 node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=30002
EXPOSE 30002
CMD node ./dist/server/entry.mjs
