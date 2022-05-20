# Hello World(s)

## **Space travel-planner**

Pick your dream destinations and make them a reality with Hello World(s).  
To infinity, and beyond!

## About this project

This is the third group assignment (8th assignment) for Fullstack Developer students at Chas Academy.

This project was built using MERN-stack and deployed via Heroku and Netlify.

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
