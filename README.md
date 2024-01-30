# Workshop: Backend Fundamentals - Pet Finder

## Introduction

In this workshop, you'll be provided this GitHub repo with details for a full operational CRUD API that uses Express.JS, PostgreSQL, and other technologies that you've been trained on.

## Problems to Solve

Begin this Career Simulation by cloning the GitHub repo, pseudocoding prompts, installing dependencies and solving the problems below.

### Problem 1: GET all pets

The GET route for all pets is `/api/v1/pets`. 
__Pseudocode__: Define an endpoint in the server for GET request and get all pets data, including name, owner, etc.

### Problem 2: GET pets by name

The GET route for pets by name is `/api/v1/pets/:name`. 
__Pseudocode__:
- Define an endpoint in the server for GET request by name
- If name is found, return the pet information 
- If name is not found, return an error message "Pet not found"

### Problem 3: GET pet by owner's name with a query string

The GET route for pets by owner's name is `/api/v1/pets/owner`. The way to test the query is working is to nevigate in the browswer with for example '/api/vi/pets/owner?owner=John'.
__Psuedocode__:
- Define an endpoint in the server for GET request by owner
- If owner name is found, return the pet(s) information 
- If owner name is not found, return an error message "No pets found for this owner"


### STRETCH GOAL: Problem 4: Serve a static index.html file

The GET route for serving a static index.html file. The index.html file currently render all the pets in the API. 


### Endpoints

Port 8080 by default.

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| GET    | /                  | Serve a static index.html file |
| GET    | /api               | Returns 'Hello World!'         |
| GET    | /api/v1/pets       | Get all pets                   |
| GET    | /api/v1/pets/:name | Get a pet by name              |
| GET    | /api/v1/pets/owner | Get a pet by owner's name      |
