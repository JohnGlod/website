FROM alpine:3.15

ENV NODE_VERSION 16.15.1

WORKDIR /website
ADD package.json package.json
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

FROM alpine:3.15

WORKDIR /website

COPY --from=builder /website  .

ENV HOST 0.0.0.0
EXPOSE 80

CMD [ "yarn", "start" ]