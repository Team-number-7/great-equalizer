FROM node:16-alpine

COPY .next /opt/gequalizer

EXPOSE 80
CMD ["npm", "run", "start"]
