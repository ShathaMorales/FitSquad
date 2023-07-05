const UserController = require('../controllers/user.controller');
const PostController = require('../controllers/post.controller');

module.exports = (app) => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/users', UserController.getAll);
    app.get('/api/logout', UserController.logout);
    app.get('/api/user/:userId', UserController.findUser);
    app.post('/api/posts', PostController.createPost);
    app.get('/api/posts', PostController.getAllPosts);
    app.get('/api/posts/:id', PostController.getPost);
    app.put('/api/posts/:id', PostController.updatePost);
    app.delete('/api/posts/:id', PostController.deletePost);
}