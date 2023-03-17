FROM node:lts as builder

WORKDIR /website

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts

WORKDIR /website

COPY --from=builder /website  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]
