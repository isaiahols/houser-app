require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const con = require('./controller');

const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(bodyParser.json());

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
    })


app.get(`/api/houses`, con.getAll);
app.post(`/api/houses`, con.addHouse);
app.delete(`/api/houses/:id`, con.removeHouse);





app.listen(SERVER_PORT, () => {
    console.log(`can you hear me? I'm on ${SERVER_PORT}`)
})