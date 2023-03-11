const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
            required: true,
        },
        ingredientList: [
            {
                ingredient: {
                    type: String,
                    required: true,
                },
                amount: {
                    type: String,
                    required: true,
                },
            },
        ],
        cookTime: {
            prep: String,
            total: String,
        },
        directions: {
            type: String,
            required: true,
        },
        image: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Recipe', recipeSchema);
