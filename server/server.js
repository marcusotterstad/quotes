const express = require('express');
const app = express();
const PORT = 5000;

const quotes = [
    {id: 1, quote: "Life is pain", author: "Jerma"},
    {id: 2, quote: "Sweet and sour sauce", author: "Kanye West"},
    {id: 3, quote: "That\'s just good sense", author: "Monica Bing"}
];

// GET
app.get("/quotes", (req, res) => { 
    res.json(quotes);
});

app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`);
});