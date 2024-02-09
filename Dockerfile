FROM node:16
ARG registry
ARG auth 
ARG publishRegistry
RUN mkdir /application
WORKDIR /application
COPY package.json /application/
COPY tsconfig.json /application/
COPY .storybook /application/
COPY .eslintrc.json /application/
COPY babel.config.json /application/
COPY yarn.lock /application/
COPY src /application/src
RUN npm config set registry=https://${registry}
RUN npm config set //${registry}:_auth="${auth}"
RUN npm config set always-auth=true
RUN npm config list
RUN yarn config list
RUN yarn --verbose
RUN yarn --verbose build
RUN npm config set registry=https://${publishRegistry}
RUN npm config set //${publishRegistry}:_auth="${auth}"
RUN npm config list
RUN npm publish --registry https://${publishRegistry}