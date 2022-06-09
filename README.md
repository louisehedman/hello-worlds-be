# Hello World(s)

## **Space travel-planner**

Pick your dream destinations and make them a reality with Hello World(s).  
To infinity, and beyond!

---

## **About this project**

This is the third group assignment (8th assignment) for Fullstack Developer students at Chas Academy.

This project was built using MERN-stack and deployed via Heroku and Netlify.

Before you clone and start this project make sure you have Node.js
installed and have a working local or hosted version of MongoDB.

This project was created to work together with a [React, TypeScript frontend](https://github.com/louisehedman/hello-worlds-fe).  
Instructions for how to set up the frontend part of this project can be found in the frontend repo.

---

## **Tech Stack**

**Client:** React, TypeScript, Bootstrap  
**Server:** Node, Express, Mongoose, MongoDB, Nodemon

---

## **Project setup**

After cloning this repo navigate to the root folder in your terminal.

#### **Note!**

ESlint will warn about types not found. This does not effect the app running properly in the browser.
Disable the ESlint extension and reload VS Code.

- Clone repo

- From the project root folder run

```bash
$ npm install
```

- In the root folder create file `.env`.
- Add the following variables:

```env

PORT=<Choose your port>     // Express.js server
DB_URI=<Your MongoDB URI>   // MongoDB URI
JWT_SECRET=<Secret string>
JWT_EXPIRE=<JWT token expiration time>

```

- Seed the database with planet data using the command:

```
$ npm run seed
```

This will first drop "planets" and "blogs" collections if they exists and then create them
and insert documents for each planet and placeholder blog posts.

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

## **API reference**

**Public routes**

```
| Method    |               | Description                |
| :-------- | :-------      | :------------------------- |
| POST      | /register     | Register a user            |
| POST      |/login         | Login user                 |
| GET       | /planets      | Get all planet data        |
| GET       | /planets/:id  | Get specific planet data   |
| GET       | /blogs        | Get all blogs              |
| GET       | /blogs/:id    | Get specific blog post     |

```

**Protected routes**

```
| Method    |                | Description                              |
| :-------- | :-------       | :-------------------------               |
| POST      | /logout        | Logout user                              |
| GET       | /user          | Get user data                            |
| GET       | /get-list      | Get all user trips                       |
| GET       | /get-trip/:id  | Get specific trip data                   |
| PATCH     | /create-trip   | Create trip for currently authorized user|

```

### **Units**

Weights are given in kg and distance in km.
Temperature is given in Kelvin.

---

## Documentation

- [Project idea](https://docs.google.com/document/d/1AVMP5OK2YgBT46wpgyHdWCBFURYMoxQrOBpvsFkTcWw/edit)
- [Figma](<https://www.figma.com/file/k3lHPDIIlkub15njOPA6ez/Hello-World(s)?node-id=0%3A1>)
- [Distance and travel time to planets in km](https://docs.google.com/document/d/1_nzSHf9VF5jQHNZj9Hmg9MX6-erocGOc4tKCi8uWee4/edit)
- [General planet info](https://docs.google.com/document/d/1anX7E3fgoCfaRA1R6C05wGHyl_LD8MSEU-Xx3Q2dnew/edit#heading=h.2x0dpo8906gg)
- [Personas](https://docs.google.com/presentation/d/1V6UZIddNoCe0ouqjQf5iNsiiZzXwdz180Lqw-TXuuaw/edit#slide=id.g128f4834786_0_60)

---

## 🚀**Authors**

- Nova Boman [@NovaBoman](https://www.github.com/NovaBoman)
- Sandra Wallén [@sandra-wallen](https://www.github.com/sandra-wallen)
- Simon Miller [@simomill](https://www.github.com/simomill)
- Louise Hedman [@louisehedman](https://www.github.com/louisehedman)
- Paulina Eriksson [@paulinaeriksson](https://www.github.com/paulinaeriksson)
- Onur Kayhan [@onurkayhann](https://www.github.com/onurkayhann)
- Alisher Yuldashev [@baldazay](https://www.github.com/baldazay)
- Simon Denito [@simden124](https://www.github.com/simden124)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## **Support**

For support, email helloworlds2022@gmail.com or join our Slack channel.
