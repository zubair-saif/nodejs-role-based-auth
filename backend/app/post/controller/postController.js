const { Post } = require('../models/postM');


module.exports.create = async (req, res) => {
    try {
        const url = req.protocol + "://" + req.get("host");
        const post = await Post.create({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            type: req.body.type,
            pages: req.body.pages,
            imagePath: url + "/uploads/" + req.file.filename
        });
        post.save();
        res.status(201).json({ message: "Post added successfully", post: post });
    } catch (e) {
        res.json({ message: 'something went wrong..' + e });
    }

}


module.exports.update = async (req, res) => {
    try {
        const url = req.protocol + "://" + req.get("host");
        const post = {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            type: req.body.type,
            pages: req.body.pages,
            imagePath: url + "/uploads/" + req.file.filename
        };
        const updateuser = await Post.findByIdAndUpdate(req.params.id, {
            $set: post
        },
            { new: true }
        );
        res.status(201).json({ message: "Post Updated Succesfully", updateuser });
    } catch (e) {
        res.json({ message: 'something went wrong..' + e });
    }

}

module.exports.getPost = async (req, res) => {
    try {

        const list = await Post.find();
        if (!list) {
            res.status(404).json({ message: 'not found' });
        }
        res.status(200).json({
            message: "Posts fetched Successfully",
            posts: list,
        });
    } catch (e) {
        res.json({ message: 'something went wrong..' + e });
    }

}

module.exports.getOne = async (req, res) => {
    try {
        const single = await Post.findById(req.params.id);
        if (!single) {
            res.status(404).json({ message: "Post Not found!" });
        }
        res.status(200).json(single);
    } catch (e) {
        res.json({ message: 'something went wrong..' + e });
    }
}

module.exports.delete = async (req, res) => {
    try {
        const post = await Post.findByIdAndRemove(req.params.id);
        if (!post) {
            res.status(404).json({ message: "No record found" });
        }
        return res.status(204).json("Succesfully Deleted");
    } catch (e) {
        res.json({ message: 'something went wrong..' + e });
    }
}