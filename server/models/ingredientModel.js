const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        type: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Ingredient', ingredientSchema);
