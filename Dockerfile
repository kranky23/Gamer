FROM node:alpine
WORKDIR /app 
COPY ./ ./
RUN npm i
# CMD ["ng"]
CMD ["npm", "run", "build","--prod"]
