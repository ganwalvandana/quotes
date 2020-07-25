const Posting = require('../models/main');
const { post } = require('../routes/main');

exports.getposting = (req, res, next) => {
    res.render('main');
};


exports.getpost = (req, res, next) => {
    res.render('post', {
        title: 'Post',
        path: '/main/post',
        editing: true
    });
};

exports.postpost = (req, res, next) => {
    const title = req.title;
    const description = req.description;
    const writer = req.writer;
    post.save();
    res.redirect('/');
};

