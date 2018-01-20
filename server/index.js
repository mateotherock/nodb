const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const recipes = require('./recipes');

app.use(bodyParser.json());

app.get('/api/recipes', function(req,res) {
    res.status(200).send(recipes);
})
app.delete('/api/recipes/:id', function(req, res) {
    recipes.filter(id => id !== req.params.id);
    res.status(200).send(recipes);
})

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));