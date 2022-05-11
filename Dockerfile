FROM node:alpine
WORKDIR /app 
COPY ./ ./
RUN npm i
# RUN npm test
CMD ["npm", "run", "build","--prod"]
