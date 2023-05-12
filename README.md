# Express JS Boiler Plate by WhiteCat20

This is the boiler plate for express js to make your work easy on using javascript as a backend server. with entry point, controllers, routes, and modelling using prisma. Also it already configured with file uploads. Great for making RESTful APIs and for learning NodeJS as a beginner.

## Installation

Use the package manager [NPM](https://www.npmjs.com/) to install the package.
```bash
npm install
```
Then initiate the prisma model using this script
```bash
npx prisma init
```
It'll iniate a prisma project, and generate prisma folder, also the .env file\
Go to prisma/schema.prisma, and then change your DBMS (ex: mysql)
```javascript
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  // provider = "postgresql"
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
Then go to your .env file and change the configuration (ex: mysql)\
In this case, i am going to use MySQL, and the username is root as well as the password is root.\
The default port of MySQL in local is 3306, and my database name is mydb
```javascript
//DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
DATABASE_URL="mysql://root:root@localhost:3306/mydb"
```
## Usage

You can use this boiler plate for any purpose, feel free to clone my project, and you can make your own beautiful backend app using javascript.