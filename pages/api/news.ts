import axios from 'axios';
const mySecret = process.env['api'];
const mySecret2 = process.env['api2']

const News = async (req, res) => {
	if(req.method == "POST"){
		let page = req.query.page;
		let size = req.query.size;
		let r = await axios('https://newsapi.org/v2/top-headlines?country=in&category=technology&language=en&apiKey=' + mySecret2 +`&page=${page}&pageSize=${size}`);
		let a = await r.data;
		res.status(200).json(a);
	} else {
		res.status(404);
	}
}

export default News