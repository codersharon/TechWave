import connectToDB from './mongodb/db'
import Post from './mongodb/models/post'
import HowTo from './mongodb/models/how-to'
import Apps from './mongodb/models/apps'
import Websites from './mongodb/models/websites'

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
	if (req.method == "POST") {
		let results = []
		const queries = req.body.query.split("#").slice(1, req.body.query.split("#").length);
		const howtos = await HowTo.find().sort({_id:-1});
		const posts = await Post.find().sort({_id:-1});
		const allposts = posts.concat(howtos);
		allposts.map((post)=>{
			queries.map((query)=>{
				let check = post.tags.split("#").slice(1, post.tags.split("#").length).includes(query);
				if (check == true) {
					if (results.includes(post) == false) {
						results = results.concat([post]);
					}
				}
			})
		});
		res.status(200).json({results})
	} else {
		res.status(404);
	}
}

export default connectToDB(handler)
