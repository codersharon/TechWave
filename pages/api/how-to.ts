import connectToDB from './mongodb/db'
import HowTo from './mongodb/models/how-to'
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
		let howto = await HowTo.findByIdAndDelete(req.query.id);
		res.status(200).json({ howto });
	} else if (req.method == "GET") {
		const howto = await HowTo.find();
		res.status(200).json({ howto })
	} else if (req.method == "POST") {
		const howto = new HowTo({
			title: req.body.title,
			content: req.body.content,
			image: req.body.image,
			date: req.body.date,
			tags: req.body.tags,
		});

		// 		{
		//   "title": "req.body.title",
		//   "content": "req.body.title",
		//   "image": "req.body.image",
		//   "date": "req.body.date",
		//   "post": "req.body.post",
		//   "tags": "req.body.tags"
		// }

		howto.save();

		res.status(200).json({ howto })
	} else {
		res.status(404);
	}
}

export default connectToDB(handler)
