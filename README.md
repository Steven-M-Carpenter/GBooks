# GBooks Deluxe

## About This Application

GBooks Deluxe is a full-stack web application built using the React.js library.  The applicaiton leverages the Google Books API to retrieve key information for books matching the provided search term.  The application also provides the option to save select books to an integrated Mongo database.  Saved books can also be deleted at any time.


## Technologies Used
__Backend__
* Node.js
* Express server

__Frontend__
* Bootstrap
* React.js

__Data__
* Mongo DB
* Mongoose ODM


## Deployed Application

This application is deployed in the Heroku hosting service.  The application can be accessed at the following link:

https://agile-inlet-53983.herokuapp.com/


## Running the app locally

This application can be run locally for those with Node.js installed.  After downloading the application, start by installing frontend and backend dependencies.  While in this directory, run the following command:

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn start
```

The app should now be running on <http://localhost:3000>. 

