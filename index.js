// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    res.json(pets);
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const owner = req.query.owner;

    // Ensure owner is provided
    if (!owner) {
        return res.status(400).send('Owner name is required');
    }

    // find all pets for the owner in the pets array
    const ownedPets = pets.filter(pet => pet.owner.toLowerCase() === owner.toLowerCase());

    // send the owned pets as a response
    if (ownedPets.length > 0) {
        res.json(ownedPets);
    } else {
        res.status(404).send('No pets found for this owner');
    }
});


// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    const petName = req.params.name;
    const pet = pets.find(p => p.name.toLowerCase() === petName.toLowerCase());

    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send('Pet not found');
    }
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;