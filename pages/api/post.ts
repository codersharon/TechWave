import connectToDB from './mongodb/db'
import Post from './mongodb/models/post'

const handler = async (req, res) => {
	if(req.method == "DELETE") {
		let posts = await Post.findByIdAndDelete(req.query.id);
    res.status(200).json({ posts });
	} else if(req.method == "GET") {
		const posts = await Post.find();
		res.status(200).json({ posts })
	} else if(req.method == "POST") {
		const post =  new Post({
			title: req.body.title,
			image: req.body.image,
			date: req.body.date,
			post: req.body.post,
		});
		
		post.save();
		
		res.status(200).json({ post })		
	} else {
		res.status(404);
	}
}

export default connectToDB(handler)
