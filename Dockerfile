# syntax=docker/dockerfile:1.4

# ################### ###################
# STAGE 1: Base
# ################### ###################
FROM node:19-alpine3.16 AS base

WORKDIR /app

COPY package*.json ./

# Expose the port the app runs in
ARG PORT
ENV PORT $PORT
EXPOSE $PORT

# Set React App environment values
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# ################### ###################
# STAGE 2: Development
# ################### ###################
FROM base AS development

RUN npm ci
COPY . /app

# Serve the app
CMD ["npm", "run", "start"]

# ################### ###################
# STAGE 3: Dev-envs
# ################### ###################
FROM development as dev-envs

RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

# ################### ###################
# STAGE 4: Production
# ################### ###################

# Pre-production
FROM base as pre-production

RUN npm ci --omit=dev

COPY . /app
RUN npm run build

# Production
FROM nginx:1.23.3-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=pre-production /app/build /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
