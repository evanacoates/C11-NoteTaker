const fs = require('fs');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "/index.html"))
});

app.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, "/notes.html"))
});
app.get('/api/notes', (req, res) => {});