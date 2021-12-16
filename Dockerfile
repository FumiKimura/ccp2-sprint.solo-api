FROM node:14.16.0
WORKDIR /
COPY . .
RUN npm install
WORKDIR /src-frontend
RUN npm install --production
WORKDIR /
EXPOSE 8080
CMD ["npm", "run", "start"]