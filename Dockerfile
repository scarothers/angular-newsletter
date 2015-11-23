FROM node:0.10.40

RUN apt-get -y update && apt-get -qy upgrade && npm install -g forever

COPY ./ /usr/src/angular-newsletter

WORKDIR /usr/src/angular-newsletter

EXPOSE 3000

EXPOSE 5000

RUN forever start -c "npm start" ./