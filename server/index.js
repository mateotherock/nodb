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
    var filteredRecipes = recipes.filter(recipe => recipe.id !== Number(req.params.id));
    res.status(200).send(filteredRecipes);
})

app.post('/api/recipes', function(req,res) {
    let id = recipes.length + 1
    req.body.id=id
    console.log(req.body);
    req.body.instructions = JSON.parse(req.body.instructions);
    req.body.ingredients = JSON.parse(req.body.ingredients);
    recipes.push(req.body);
    
    res.status(200).send(recipes);
})
app.put('/api/recipes/:id', function(req,res) {
    req.body.instructions = JSON.parse(req.body.instructions);
    req.body.ingredients = JSON.parse(req.body.ingredients);
    console.log(req.params.id)
    console.log(req.body)
    for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].id === Number(req.params.id)) {
            recipes[i] = req.body
            recipes[i].id = Number(req.params.id)
        }
    }
    res.status(200).send(recipes)
})

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));