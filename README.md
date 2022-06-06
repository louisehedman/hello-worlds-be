# Hello World(s)

## **Space travel-planner**

Pick your dream destinations and make them a reality with Hello World(s).  
To infinity, and beyond!

## About this project

This is the third group assignment (8th assignment) for Fullstack Developer students at Chas Academy.

This project was built using MERN-stack and deployed via Heroku and Netlify.

## 🚀Authors

- Nova Boman [@NovaBoman](https://www.github.com/NovaBoman)
- Sandra Wallén [@sandra-wallen](https://www.github.com/sandra-wallen)
- Simon Miller [@simomill](https://www.github.com/simomill)
- Louise Hedman [@louisehedman](https://www.github.com/louisehedman)
- Paulina Eriksson [@paulinaeriksson](https://www.github.com/paulinaeriksson)
- Onur Kayhan [@onurkayhann](https://www.github.com/onurkayhann)
- Alisher Yuldashev [@baldazay](https://www.github.com/baldazay)
- Simon Denito [@simden124](https://www.github.com/simden124)

## Tech Stack
**Client:** React, TypeScript, Bootstrap
**Server:** Node, Express, Mongoose, MongoDB, Nodemon

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`DB_URI`
`JWT_SECRET`
`JWT_EXPIRE`

## Documentation

[Project idea](https://docs.google.com/document/d/1AVMP5OK2YgBT46wpgyHdWCBFURYMoxQrOBpvsFkTcWw/edit)
[Distance and travel time to planets in km](https://docs.google.com/document/d/1_nzSHf9VF5jQHNZj9Hmg9MX6-erocGOc4tKCi8uWee4/edit)
[General planet info](https://docs.google.com/document/d/1anX7E3fgoCfaRA1R6C05wGHyl_LD8MSEU-Xx3Q2dnew/edit#heading=h.2x0dpo8906gg)

## Support

For support, email helloworlds2022@gmail.com or join our Slack channel.

## License

[MIT](https://choosealicense.com/licenses/mit/)


#### **Note!**

ESlint will warn about types not found. This does not effect the app running properly in the browser.
Disable the ESlint extension and reload VS Code.

### **Backend ABOUT**

Before you clone and start this project make sure you have Node.js
installed and have a working local or hosted version of MongoDB.

### **Backend setup**

Clone repo

From the project root folder run

```bash
$ npm install
```

In the root folder create file `.env`.  
Add the following variables:

```env

PORT=<Choose your port>     // Express.js server
DB_URI=<your MongoDB URI>   // MongoDB URI

```

Seed the database with planet data using the command:

```
$ npm run seed
```

This will first drop "planets" collection if it exists and then create it
and insert documents for each planet.

When the seeding is complete `Ctrl+C` in your terminal to close the server connection.
For development, start the server again using Nodemon to automatically restart
the server on changes to `.ts` files with command:

```
$ npm run dev
```

To simply start the server without Nodemon use

```
$ npm start
```

## Coding standards

### **Naming Conventions**

### Models

Models are written in singular form with the first letter capitalized  
e.g. `User.ts`

### Interfaces

Interfaces are written in singular form using Pascal case, with model name followed by "Interface"  
e.g. `interface UserInterface`

### Controllers

Controllers are written in singular form using Pascal case, with the model name followed by "Controller"  
e.g. `UserController.ts`

## API reference

### **Planets**

Weights are given in kg and distance in km.  
Temperature is given in Kelvin.
