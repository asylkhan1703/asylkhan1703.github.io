const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    CinemaSchema = new Schema({
        uuid: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        location: {
            type: Schema.Types.Mixed
        },
        films: {
            type: [String],
            default: []
        }
    });

    mongoose.model('cinemas', CinemaSchema);