# Use a large Node.js base image to build the application and name it "build"

FROM node:lts-alpine as build

# create work directory in app folder
WORKDIR /src

COPY package.json /src

RUN npm install

COPY . /src

ENV KEYCLOAK_URL https://keycloak.neuropublic.gr/
ENV KEYCLOAK_REALM digital-transformation
ENV KEYCLOAK_CLIENT_ID ds-app

RUN npm run build

# Create a new Docker image and name it "prod"
FROM node:lts-slim as prod

WORKDIR /src

COPY --from=build /src/.output /src/.output

ENV PORT 80
EXPOSE 443
EXPOSE 80

ENTRYPOINT ["node", ".output/server/index.mjs"]
