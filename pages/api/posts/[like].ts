import connectToDB from '../mongodb/db'
import Post from '../mongodb/models/post'
import HowTo from "../mongodb/models/how-to"

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
			const doc2 = await HowTo.findById(req.query.id);
			// console.log(doc)
			if (doc == null) {
				const resp = await HowTo.findByIdAndUpdate(req.query.id, { likes: doc2.likes + 1})
				res.status(200).json( {message: "liked"} );
			} else if(doc2 == null) {
				const resp = await Post.findByIdAndUpdate(req.query.id, { likes: doc.likes + 1})
				res.status(200).json( {message: "liked"} );
			} else if (doc == null && doc2 == null) {
				res.status(404).json( {message: "not found"} );
			}
		} else if(req.query.like == "unliked") {
			const doc = await Post.findById(req.query.id);
			const doc2 = await HowTo.findById(req.query.id);

			if (doc == null) {
				const resp = await HowTo.findByIdAndUpdate(req.query.id, { likes: doc2.likes - 1})
				res.status(200).json( {message: "liked"} );
			} else if(doc2 == null) {
				const resp = await Post.findByIdAndUpdate(req.query.id, { likes: doc.likes - 1})
				res.status(200).json( {message: "unliked"} );
			} else if (doc == null && doc2 == null) {
				res.status(404).json( {message: "not found"} );
			}
		}
	} else {
		res.status(404);
	}
}

export default connectToDB(Like)