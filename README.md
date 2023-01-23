### Project Writed By Ghafour Alipour

# NestJsBE
In this project I implemeted a backend with Typsescript language, NestJS Framework and sqllite as database.

### Start The Project
npm install
npm start


### Create a new user
POST http://localhost:3000/api/users
content-type: application/json

{
  "first_name": "user 7",
  "last_name": "user 7",
  "avatar": "https://reqres.in/img/faces/8-image.jpg",
  "email": "asdf@asdf.com",
  "password": "asdlfkajsd"
}

### All Users 
GET http://localhost:3000/api/users

### Find a particular user with a given ID
GET http://localhost:3000/api/user/6

### Find a particular user avatar with a given ID
GET http://localhost:3000/api/user/6/avatar

### Delete a user given id
DELETE http://localhost:3000/api/user/6

