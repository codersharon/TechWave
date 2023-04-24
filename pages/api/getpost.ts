import connectToDB from './mongodb/db'
import Post from './mongodb/models/post'

const handler = async (req, res) => {
	if (req.method == "GET") {
		let posts = await Post.findById(req.query.id);
		res.status(200).json(posts);
	}
}

export default connectToDB(handler)
