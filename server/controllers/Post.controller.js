const Post = require('../models/PostSchema.model');
const User = require('../models/user.model');

module.exports = {
    create: (req, res) => {
        console.log(req.body)
        const { title, description, Url, user } = req.body;
        const post = new Post({
            title: title,
            description: description,
            Url: Url,
            user: user
        });

        post.save()
            .then((post) => {
                User.findOneAndUpdate({_id: user},{$push:{posts:post._id}},{new: true})
                .then((post) => {
                    res.json(post);
                })
                .catch((error) => {});
            })
            .catch((error) => console.error(error));
    }

      };
