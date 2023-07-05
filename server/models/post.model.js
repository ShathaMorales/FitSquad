const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    Url: {
        type: String,
        required: [true, 'Url is required'],
    },
    description: {
        type: String,
        required: [true, 'description is required'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the User model
        required: true,
    }
})

module.exports = mongoose.model('Post', PostSchema);