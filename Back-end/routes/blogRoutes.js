const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog')

console.log(
    "Entered BLog Routes"
)

router.delete('/blogs/:id', async(req,res)=>{

    try{
        const blogId = req.params.id
        const updatedBlog = await Blog.findOneAndDelete({_id: blogId})
        res.json("Blog Deleted");
    }catch(err){
        res.status(500).json({error: "What is the error bidu"});
    }
})

router.put('/blogs/:id', async(req,res)=>{

    try{
        const blogId = req.params.id;
        console.log(blogId);  
        const updatedBlog = await Blog.findOneAndUpdate({_id: blogId},req.body,{new:true})
        console.log(updatedBlog);
        res.json(updatedBlog);
    }catch(err){
        res.status(500).json({error: "What is the error bidu"});
    }
})


router.get('/blogs', async ( req, res ) =>{
    try{
        const blogs = await Blog.find();
        res.json(blogs)
    }catch(err){
        res.status(500).json({error: "Failed to fetch blogs Bidu"})
    }
});


// Get Paginated Blogs
router.get('/blogs/history', async (req, res) => {
  try{
    const { page = 1, limit = 5, search = '', sort = 'createdAt', order = 'desc' } = req.query;

  const query = {
    $or: [
      { title: { $regex: search, $options: 'i' } },
      { author: { $regex: search, $options: 'i' } }
    ]
  };

  const sortOption = { [sort]: order === 'desc' ? -1 : 1 };

  const blogs = await Blog.find(query)
    .sort(sortOption)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Blog.countDocuments(query);

  res.json({
    data: blogs,
    currentPage: Number(page),
    totalPages: Math.ceil(total / limit),
    totalBlogs: total
  });
  }catch(err){
    res.status(500).json({message: "Jhamela Ho gya hai Bidu"})
  }
});


// 🔹 GET single blog by blogId
router.get('/blogs/:blogId', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});


// 🔹 GET blogs by user
router.get('/users/:userId/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({ _UserId: req.params.userId });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user blogs' });
  }
});

router.post('/createblog', async (req,res)=>{
    const data = req.body;
    console.log(data);
    try{
        const newblog = new Blog({
            _UserId: data._UserId,
            title: data.title,
            author: data.author,
            excerpt: data.excerpt,
            image: data.image || ""
        })
        console.log("Running")
        await newblog.save();
        return res.status(201).json({
            _id: newblog._id,   // important for frontend
            title: newblog.title,
            author: newblog.author,
            excerpt: newblog.excerpt,
            image: newblog.image,
        })
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Kuch Gadbad hai Bidu ',err})
    }
})

module.exports = router;

