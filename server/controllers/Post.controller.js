const Post = require('../models/post.model');
const User = require('../models/user.model');

module.exports = {
    createPost: (req, res) => {
        console.log(req.body)
        const { title, Url, description, user, day } = req.body;
        const post = new Post({
            title: title,
            Url: Url,
            description: description,
            user: user,
            day: day,
        })

        post.save()
            .then((post) => {
                User.findOneAndUpdate({ _id: user }, { $push: { posts: post._id } }, { new: true })
                    .then((post) => {
                        res.json(post);
                    })
                    .catch((error) => { });
            })
            .catch((error) => console.error(error));
    }
}

module.exports.getAllPosts = (request, response) => {
    Post.find({})
        .then(posts => response.json(posts))
        .catch(err => response.status(400).json(err))
}

module.exports.getPost = (request, response) => {
    console.log(request.params.id)
    Post.findOne({ _id: request.params.id })
        .then(post => response.json(post))
        .catch(err => response.status(400).json(err))
}

module.exports.updatePost = (request, response) => {
    const { title, Url, description, user } = request.body;

    Post.findById(request.params.id)
        .then(post => {
            if (!post) {
                return response.status(404).json({ error: 'Exercise not found' });
            }
            post.title = title;
            post.Url = Url;
            post.description = description;
            post.user = user;
            return post.validate();
        })
        .then(() => {
            return Post.findOneAndUpdate({ _id: request.params.id }, { title, Url, description, user }, { new: true });
        })
        .then(updatedPost => {
            console.log(updatedPost);
            response.json(updatedPost);
        })
        .catch(err => response.status(400).json(err));
}

// module.exports.deletePost = (request, response) => {
//     Post.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.status(400).json(err))
// }


module.exports.deletePost = (request, response) => {
    console.log("delete route")
    console.log(request.params.id)
    Post.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}