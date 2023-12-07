## About The Project
<p>
  This project consists of a SPA that displays information about movies, stored in a database. It was developed as an objective of a challenge test to apply for a job position.
</p>

## Built with

[![Angular][Angular.io]][Angular-url]
[![Node.js][Nodejs.io]][Node-url]
[![NestJS][Nestjs.io]][Nest-url]
[![MongoDB][Mongodb.io]][Mongo-url]
[![Docker][Docker.io]][Docker-url]

## Getting started

### Prerequisites
To run this project, you will need a device with Node.js installed, LTS version is prefered. If you don't have Node.js, you can get it from <a href="https://nodejs.org/en/learn/getting-started/how-to-install-nodejs">here</a>.

Also, you will need to have <a href="https://docs.docker.com/get-docker/">Docker</a>, as its Desktop version or wherever that fits your needs.

### Installation
First, we will install both Angular and NestJS CLIs, if we do not have them.
```
npm i -g @angular/cli
npm i -g @nestjs/cli
```

### Run for development
Next, what you want is to set up the Mongo database with Docker, using docker-compose:
```
docker-compose up -d
```

To run the projects, in watch mode, you need to type in any of the directories:
```
npm run start:dev
```

Finally, you can start to populate the DB and start playing with the code, just fire a HTTP request (GET) to the API endpoint:
```
<API_HOST_URL>/api/v1/seed
```


### Setup a local environment
For these, you will need to create an environment file and a new docker-compose file for the environment that you want to create. For instance, we are creating an environment file for production (you can use the ```template.env``` file as base to map), so it will be ```.env.prod``` for the ```backend``` project. Then, populate its variables and prepare the docker-compose file to build the docker image with the next command, pointing to that recently created env file:
```
docker-compose -f docker-compose.prod.yaml --env-file nackend/.env.prod up --build
```

After build, you can run the image in dettached mode:
```
docker-compose -f docker-compose.prod.yaml --env-file backend/.env.prod up -d
```

## Demo
<a href="https://qst-movies-app-production.up.railway.app/">View Demo</a>


[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Nodejs.io]: https://img.shields.io/badge/nodejs-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Nestjs.io]: https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white
[Mongodb.io]: https://img.shields.io/badge/mongodb-023430?style=for-the-badge&logo=mongodb&logoColor=white
[Docker.io]: https://img.shields.io/badge/docker-1D63ED?style=for-the-badge&logo=docker&logoColor=white


[Angular-url]: https://angular.io/
[Node-url]: https://nodejs.org/
[Nest-url]: https://nestjs.com/
[Mongo-url]:  https://www.mongodb.com/
[Docker-url]: https://www.docker.com/