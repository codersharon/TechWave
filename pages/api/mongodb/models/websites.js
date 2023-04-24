const mongoose = require('mongoose');

const WebsiteSchema = new mongoose.Schema({
	title: { type: String, required: true},
	content: { type: String, required: false },
	link: { type: String, required: true },
	tags: { type: Array, required: true },
});

mongoose.models = {}

const Websites = mongoose.model('Website', WebsiteSchema);

export default Websites;
