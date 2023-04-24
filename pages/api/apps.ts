/* eslint-disable */
import Apps from './mongodb/models/apps'
import connectToDB from './mongodb/db'
// import NextCors from 'nextjs-cors';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

async function handler(req, res) {
   //   await NextCors(req, res, {
   //    // Options
   //    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
   //    origin: '*',
   //    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   // });
	if (req.method == "DELETE") {
		let app = await Apps.findByIdAndDelete(req.query.id);
		res.status(200).json({ app });
	} else if (req.method == "GET") {
		const apps = await Apps.find();
		res.status(200).json({ apps })
	} else if (req.method == "POST") {
		const app = new Apps({
			title: req.body.title,
			content: req.body.content,
			image: req.body.image,
			link: req.body.link,
			tags: req.body.tags,
		});

		// 		{
		//   "title": "req.body.title",
		//   "image": "req.body.image",
		//   "date": "req.body.date",
		//   "post": "req.body.post",
		//   "tags": "req.body.tags"
		// }

		app.save();

		res.status(200).json({ app })
	} else {
		res.status(404);
	}
}

export default connectToDB(handler)
