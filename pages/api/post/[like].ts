import connectToDB from '../mongodb/db'
import Post from '../mongodb/models/post'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

const Like = async (req, res) => {
	if (req.method == "PUT") {
		if (req.query.like == "liked") {
			const doc = await Post.findById(req.query.id);
			const resp = await Post.findByIdAndUpdate(req.query.id, { likes: doc.likes + 1})
			res.status(200).json( {message: "liked"} );
		} else if(req.query.like == "unliked") {
			const doc = await Post.findById(req.query.id);
			const resp = await Post.findByIdAndUpdate(req.query.id, { likes: doc.likes - 1})
			res.status(200).json( {message: "unliked"} );
		}
	} else {
		res.status(404);
	}
}

export default connectToDB(Like)