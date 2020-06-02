const express = require('express');

const app = express();

app.use((request, response, next) => {
    console.log('Une requête a été envoyé')
    next();
})

app.use((request, response, next) => {
    response.status(201);
    next();
})

app.use((request, response) => {
    response.json( {message : "Hello les Brows, votre request est passé !"})
})


module.exports = app;