import connectToDB from './mongodb/db'
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
	if (req.method == "DELETE") {
		let website = await Websites.findByIdAndDelete(req.query.id);
		res.status(200).json({ website });
	} else if (req.method == "GET") {
		const websites = await Websites.find().sort({_id:-1});
		res.status(200).json({ websites })
	} else if (req.method == "POST") {
		const website = new Websites({
			title: req.body.title,
			content: req.body.content,
			link: req.body.link,
			tags: req.body.tags,
		});

		// 		{
		// 	title: req.body.title,
		// 	content: req.body.title,
		// 	link: req.body.title,
		// 	tags: req.body.tags,
		// }

		website.save();

		res.status(200).json({ website })
	} else {
		res.status(404);
	}
}

export default connectToDB(handler)
