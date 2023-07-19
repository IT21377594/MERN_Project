const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');

const app = express(); //create object of this imported package
dotenv.config();

app.get("/", (req,res) => {
    res.send("API is running...");
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);

    res.send(note);
});

//create web server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up and running on port number : ${PORT}`);
});
