const express = require('express');
const router = express.Router();

const Ingredient = require('../models/ingredientModel');

// @route GET api/ingredients/
// @description Get all ingredients
router.get('/', (req, res) => {
    Ingredient.find()
        .then((ingredients) => res.status(200).send(ingredients))
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                error: 'No ingredients found',
            });
        });
});

// @route GET api/ingredients/:id
// @description Get one ingredient
router.get('/:id', (req, res) => {
    Ingredient.findById(req.params.id)
        .then((ingredient) => res.json(ingredient))
        .catch((err) => {
            console.log(err);
            res.status(404).json({
                error: 'Ingredient not found',
            });
        });
});

// @route POST api/ingredients/add
// @description Post new ingredient
router.post('/add', (req, res) => {
    Ingredient.create(req.body)
        .then((ingredient) => res.status(201).send(ingredient))
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: 'Unable to add ingredient' });
        });
});

// @route PUT api/ingredients/update/:id
// @description Update ingredient
router.put('/update/:id', (req, res) => {
    Ingredient.findByIdAndUpdate(req.params.id, req.body)
        .then((ingredient) => res.status(201).send(ingredient))
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: 'Unable to edit ingredient' });
        });
});

// @route DELETE api/ingredients/delete/:id
// @description Delete ingredient
router.delete('/delete/:id', (req, res) => {
    Ingredient.findByIdAndDelete(req.params.id)
        .then((ingredient) => res.status(200).send(ingredient))
        .catch((err) => {
            console.log(err);
            res.status(404).json({ error: 'Ingredient not found' });
        });
});

module.exports = router;
