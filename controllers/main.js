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
            posts.title = edittitle;
            posts.description = editdescription;
            posts.writer = editwriter;
            return post.save();
            res.redirect('/posts');
        });
        // .then(result => {
        //     console.log('Post Edited!');
        //     posts: posts,
        //     pageTitle: posts,
        //     res.redirect('/posts');
        // });
        
};

exports.getposts = (req, res, next) => {
    Post.find()
      .then(posts => {
          console.log(posts);
          res.render('posts', {
            posts: posts,
            pageTitle: posts,
            path: '/posts'  
          });
      });
};









exports.getcontact = (req, res, next) => {
    res.render('contact',{ 
        title: 'Contact',
        path: '/main/contact',
        editing: true
    });
};
