FROM node:0.10.40

RUN apt-get -y update && apt-get -qy upgrade && npm install -g forever

COPY ./ /usr/src/angular-newsletter

WORKDIR /usr/src/angular-newsletter

EXPOSE 3000

EXPOSE 5000

RUN forever start -c "npm start" ./

# If I do  'docker exec -it 3c99e7ac7967 bash' to ssh into the running container ... 
# And I do 'npm start' manually - the site will run at: http://192.168.99.100:32778/

# And I can access port 5000 at its mapped number. However, 3000 doesn't correctly call 5000.

# TODO: 
# - Figure out how to make 3000 always call the right url for 5000 (env variable??)
# - Get 'forever npm start' working. The Dockerfile isn't making it actually run forever.