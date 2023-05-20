import connectToDB from './mongodb/db'
import Post from './mongodb/models/post'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

import NextCors from 'nextjs-cors';

async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });
	if (req.method == "DELETE") {
		let posts = await Post.findByIdAndDelete(req.query.id);
		const dataSize = await Post.dataSize();
		res.status(200).json({ posts, dataSize });
	} else if (req.method == "GET") {
		const posts = await Post.find().sort({_id:-1});
		res.status(200).json({ posts })
	} else if (req.method == "POST") {
		const post = new Post({
			title: req.body.title,
			content: req.body.content,
			image: req.body.image,
			date: req.body.date,
			tags: req.body.tags,
			likes: "0",
		});
		
		post.save();

		res.status(200).json( {success: true} );
	} else {
		res.status(404);
	}
}

export default connectToDB(handler)
