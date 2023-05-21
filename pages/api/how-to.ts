import connectToDB from './mongodb/db'
import HowTo from './mongodb/models/how-to'

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
		let howto = await HowTo.findByIdAndDelete(req.query.id);
		res.status(200).json({ howto });
	} else if (req.method == "GET") {
		const howto = await HowTo.find().sort({_id:-1});
		res.status(200).json({ howto })
	} else if (req.method == "POST") {
		const howto = new HowTo({
			title: req.body.title,
			content: req.body.content,
			image: req.body.image,
			links: req.body.links,
			date: req.body.date,
			tags: req.body.tags,
			likes: 0,
		});

		howto.save();

		res.status(200).json({ howto })
	} else {
		res.status(404);
	}
}

export default connectToDB(handler)
