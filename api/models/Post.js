const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    author_id: { type: Schema.Types.ObjectId, ref: 'User' },
    author_name: { type: String, required: true },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date(moment.utc().format()),
    },
    content: String,
});

module.exports = mongoose.model('Post', PostSchema);