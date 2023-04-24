const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	title: { type: String, required: true},
	image: { type: String, required: false },
	date: { type: String, required: true },
	post: { type: String, required: true },
});

mongoose.models = {}

const Post = mongoose.model('Post', PostSchema);

export default Post;