# myRetail RESTful Service
myRetail is a RESTful service that can retrieve product and price details by ID.

## Built With
* MongoDB
* Express
* AngularJS
* Node.js
* AngularJS Material

<!-- ## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) -->

<!-- ### Installing -->

## Notes
* "The Big Lebowski" is the only information on the home page pulling in from the API, the rest (if you choose to uncomment it :) ) is mock data from the NoSQL database.

## Base Functionality
- [x] Responds to an HTTP GET request at /products/{id} and delivers product data as JSON. 
- [x] Performs an HTTP GET to retrieve the product name from an external API.
- [x] Reads pricing information from a NoSQL data store and combines it with the product id and name from the HTTP request into a single response.

## Stretch Goals
- [ ] Accepts an HTTP PUT request at the same path (/products/{id}), containing a JSON request body similar to the GET response, and updates the product’s price in the data store.