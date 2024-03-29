# syntax=docker/dockerfile:1.4

# ################### ###################
# STAGE 1: Development
# ################### ###################
FROM node:19-alpine3.16 AS development
WORKDIR /app
COPY package*.json ./

# Set PORT config (3000 is the default for development)
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

# Set React App environment values
ARG REACT_APP_BACKEND_URL=https://earthmileschallenge.com/api
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

ARG REACT_APP_URL=https://earthmileschallenge.com
ENV REACT_APP_URL=$REACT_APP_URL

RUN npm ci
COPY . /app
RUN npm run build
CMD ["npm", "run", "start"]

# ################### ###################
# STAGE 2: Production
# ################### ###################

FROM nginx:1.23.3-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=development /app/build /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
