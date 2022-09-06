FROM node:16-alpine

WORKDIR /opt/gequalizer
COPY . . 

EXPOSE 3000
CMD ["npm", "run", "start"]
