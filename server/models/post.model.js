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
    },
    day: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        default: 'Monday',
    },
}, { timestamps: true

})

module.exports = mongoose.model('Post', PostSchema);