const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// router.get('/', (req, res) => {
  //  res.send('We are on posts');
//});

// Gets back all the posts
router.get('/:id', async (req, res) => {
    try {
    const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

// Submits a posts
router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post( { 
        title: req.body.title,
        description: req.body.description
    });

    // Promise
    const savedPost = await post.save()
    /*.then(data => {
        res.json(data)
    })
    .catch(err => {
        //res.status(200)
        res.json( { message: err })
    })*/
    try{
    res.json(savedPost)
    } catch(err) {
    res.json({ message: err });
    }
});

// Specific post 
// dynamic parameter 
router.get('/:postId', async (req, res) => {
    try {
  const post = await Post.findById(req.params.postId);
  res.json(post)
    }
    catch (err) {
        res.json( { message: err });
    }
});

// Delete Post
router.delete('/postId', async (req, res) => { 
    try {
// deletes a specific post
const removedPost = await Post.remove({ _id: req.params.postId });
} catch (err) {
 res.json({ message: err })
}
});

// Update a post
router.patch('/:postId', async (req,res) => {
    try {
       const updatedPost = await Post.updateOne( { _id: req.params.postId }, { $set: {title: req.body.title } }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;