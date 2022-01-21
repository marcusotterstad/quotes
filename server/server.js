const express = require('express');
const app = express();
const PORT = 5000;
const helperFunctions = require('./helperFunctions');

let quotes = [
    {id: 1, quote: "Marcus Otterstad", author: "Jerma"},
    {id: 2, quote: "Sweet and sour sauce", author: "Kanye West"},
    {id: 3, quote: "Thadasmdamsd sense", author: "Alf Otterstad"}
];


// READ
app.get("/quotes", (req, res) => { 
    res.json(quotes);
});

// CREATE
app.post("/quotes", (req, res) => {
    const quoteParam = req.query.quote;
    const authorParam = req.query.author;
    const idParam = quotes.length + 1;

    if(quoteParam && authorParam) {
        const newQuote = {id: idParam, quote: quoteParam, author: authorParam};
        quotes.push(newQuote);
        res.status(200).send("Success");
    } else {
        res.status(400).send("Failed");
    }
})

// DELETE
app.delete("/quotes/:id", (req, res) => {
    const index = req.params.id-1;
    quotes.splice(index, 1);
    quotes = helperFunctions.resetIds(quotes);

    res.status(200).send("deleted quote #" + ID);
});

// UPDATE
app.put("/quotes/:id", (req, res) => {
    const ID = req.params.id;

    const quoteParam = req.query.quote;
    const quoteAuthor = req.query.author;

    quotes[ID-1] = {id: ID, quote: quoteParam, author: quoteAuthor};

    res.status(200).send("edited quote #" + ID);

});

app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`);
});