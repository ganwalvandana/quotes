const Post = require('../models/post');

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

exports.postpost = async(req, res, next) => {
    const post = new Post({ ...req.body });
    await post.save();
    res.redirect('/');
};

exports.getcontact = (req, res, next) => {
    res.render('contact',{ 
        title: 'Contact',
        path: '/main/contact',
        editing: true
    });
};
