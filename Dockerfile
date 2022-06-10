FROM node:16-alpine
ENV APP_ROOT /website
ENV NODE_ENV production

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm ci
RUN npm run build

CMD ["npm", "run", "start"]