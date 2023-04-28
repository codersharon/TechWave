const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	title: { type: String, required: true},
	content: { type: String, required: false },
	image: { type: String, required: false },
	date: { type: String, required: true },
	tags: { type: Array, required: true },
});

mongoose.models = {}

const Post = mongoose.model('Post', PostSchema);

export default Post;
