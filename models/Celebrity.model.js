const { Schema, model } = require('mongoose')

const celebModel = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        occupation: {
            type: String,
            required: true,
        },
        catchPhrase: {
            type: String,
            required: true,
        }
    }
)

const Celeb = model('Celeb', celebModel)

module.exports = Celeb
