FROM node:0.10

# Install app dependencies
ADD package.json /tmp/
RUN cd /tmp/ && npm install

ENV APP_HOME /code
RUN mkdir -p $APP_HOME
ADD . $APP_HOME
WORKDIR $APP_HOME

EXPOSE  3001


