/* eslint-disable */
import connectToDB from './mongodb/db'
import HowTo from './mongodb/models/how-to'
import NextCors from 'nextjs-cors';

async function handler(req, res) {
     await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });
	if (req.method == "GET") {
		let howto = await HowTo.findById(req.query.id);
		res.status(200).json(howto);
	}
}

export default connectToDB(handler)
