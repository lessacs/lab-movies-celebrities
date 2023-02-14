const { Schema, model } = require('mongoose')

const moviesModel = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        plot: {
            type: String,
            required: true,
        },
        cast: {
            type: Array,
            ref: 'Celeb',
            required: true,
        }
    }
)

const Movie = model('Movie', moviesModel)

module.exports = Movie
