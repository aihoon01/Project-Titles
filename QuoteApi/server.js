const express = require('express');
const req = require('express/lib/request');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res) => {
    const randomElement = getRandomElement(quotes);
    res.send({quotes: randomElement});
  });

app.get('/api/quotes', (req, res) => {
    const filterQuotes = quotes.filter(name => {
        return name.person === req.query.person;
})
    if(req.query.person) {
        res.send({ quotes: filterQuotes});
    } else {
        res.send({ quotes: quotes});
    }
});

app.post('/api/quotes', (req, res) => {
    const Quote = req.query.quote;
    const Person = req.query.person;

    if((Quotes != '') && (person != '')) {
        quotes.push({quote: Quote, person: Person});
        res.send( {quote: {quote:Quote, person: Person}});
    } else {
        res.status(400).send();
    }    
});

app.put('/api/quotes', (req, res) => {
    const quoteId = quotes.forEach(name => {
        return name.id === req.params.id;})
    if(req.params.id) {
      quotes.push({id:  quoteId });
      res.send({quotes: quotes});
    } else {
      res.status(404).send();
    }
  })





app.listen(PORT, console.log("Server is running...."));

