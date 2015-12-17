FROM node:0.10.40

RUN apt-get -y update && apt-get -qy upgrade && npm install -g forever

COPY ./ /usr/src/angular-newsletter

WORKDIR /usr/src/angular-newsletter

EXPOSE 3000

EXPOSE 5000

CMD ["forever", "-c", "npm start", "./"]

# And I can access port 5000 at its mapped number. However, 3000 doesn't correctly call 5000.

# TODO: 
# - Figure out how to make 3000 always call the right url for 5000 (env variable??)



# HOW TO 
# Run a container and specify the port mappings: 
# docker run -t -p 3000:3000 -p 5000:5000 scarothers/angular-newsletter 

# Rebuild the image after changes:   docker build -t scarothers/angular-newsletter .
# Re-start the container:     docker stop         THEN        docker run -t -P scarothers/angular-newsletter
# SSH into running container:  'docker exec -it [CONTAINER ID] bash'

# Get IP address of container: 
# docker-machine ip default

# See all containers 
# docker ps -l

