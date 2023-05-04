import Admins from './mongodb/models/admins'
import connectToDB from './mongodb/db'
import NextCors from 'nextjs-cors';
 
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

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
		let admin = await Admins.findByIdAndDelete(req.query.id);
		res.status(200).json({ message: "Succesfully Logouted" });
	} else if (req.method == "GET") {
		const admins = await Admins.find();
		res.status(200).json(admins)
	 } else if (req.method == "POST") {
		const admin = new Admins({
			name: req.body.name,
			email: req.body.email,
			role: req.body.role,
			pass: req.body.pass,
			adid: req.body.adid,
		});
		
		admin.save();

		res.status(200).json({ message: "Loggedin Successfully" })
	// /*/
	} else {
		res.status(404);
	}
}

export default connectToDB(handler)
