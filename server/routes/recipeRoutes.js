const express = require('express');
const router = express.Router();

const Recipe = require('../models/recipeModel');

// @route GET api/recipes/
// @description Get all recipes
router.get('/', (req, res) => {
    Recipe.find()
        .then((recipe) => res.status(200).send(recipe))
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                error: 'No recipes found',
            });
        });
});

// @route GET api/recipes/:id
// @description Get one recipe
router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
        .then((recipe) => res.json(recipe))
        .catch((err) => {
            console.log(err);
            res.status(404).json({
                error: 'Recipe not found',
            });
        });
});

// @route POST api/recipes/add
// @description Post new recipe
router.post('/add', (req, res) => {
    Recipe.create(req.body)
        .then((recipe) => {
            res.status(201).send(recipe);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: 'Unable to add recipe' });
        });
});

// @route PUT api/recipes/update/:id
// @description Get all recipes
router.put('/update/:id', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body)
        .then((recipe) => res.status(201).send(recipe))
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: 'Unable to update recipe' });
        });
});

// @route DELETE api/recipes/delete/:id
// @description Get all recipes
router.delete('/delete/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then((recipe) => res.status(200).send(recipe))
        .catch((err) => {
            console.log(err);
            res.status(404).json({ error: 'Recipe not found' });
        });
});

module.exports = router;
