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
    res.redirect('/posts');
};

exports.posteditpost = (req, res, next) => {
    const edittitle = req.body.title;
    const editdescription = req.body.description;
    const editwriter = req.body.writer;

    Post.find()
        .then(post => {
            post.title = edittitle;
            post.description = editdescription;
            post.writer = editwriter;
            return post.save();
        })
        .then(result => {
            console.log('Post Edited!');
            res.redirect('/posts');
        })
        
};







exports.getcontact = (req, res, next) => {
    res.render('contact',{ 
        title: 'Contact',
        path: '/main/contact',
        editing: true
    });
};
