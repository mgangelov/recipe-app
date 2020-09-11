# recipe-app
 A web application to create and store recipes. Build with React, Redux, Express and MongoDB.
 
 [![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
 

 
 ![App image](https://i.imgur.com/PhiQDbd.png)
 
## SETUP

1. In both `frontend` and `backend` directories run `npm install`.
2. Enter credential details to connect to a MongoDB instance in `backend/config/index.js:

```
  mongodb: {
    host: process.env.MONGODB_HOST || '',
    username: process.env.MONGODB_USERNAME || '',
    password: process.env.MONGODB_PASSWORD || '',
    database: 'cookbook',
  },

```

3. Start both front-end and back-end components using `npm start`.

## USAGE

The start page takes you to the Cookbook containing all recipes. Clicking on the `Cookbook` button will always bring you back to this page. Clicking on `Add recipe` will take you to a form which allows you to create a new recipe with title and description. Clicking `Delete recipe` for any recipe will remove the recipe from the connected database.

## ADDITIONAL

The functionality to add custom ingredients is not yet implemened - currently all new recipes in the system will be made with chocolate :chocolate_bar:, milk :milk_glass: and cucumber :cucumber:.

Styling for the application is also yet to come.
