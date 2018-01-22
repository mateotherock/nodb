const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const recipes = require('./recipes');

app.use(bodyParser.json());

app.get('/api/recipes', function(req,res) {
    res.status(200).send(recipes);
})
app.get('/api/recipes/:foodType', function(req,res) {
    var filteredRecipes = recipes.filter(recipe => recipe.foodType === req.params.foodType)
    res.status(200).send(filteredRecipes);
})

app.delete('/api/recipes/:id', function(req, res) {
    console.log(req.params.id)
    var filteredRecipes = recipes.filter(recipe => recipe.id !== Number(req.params.id));
    res.status(200).send(filteredRecipes);
})

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));