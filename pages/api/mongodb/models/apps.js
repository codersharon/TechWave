const mongoose = require('mongoose');

const AppsSchema = new mongoose.Schema({
	title: { type: String, required: true},
	content: { type: String, required: false },
	image: { type: String, required: false },
	tags: { type: Array, required: true },
	link: { type: String, required: true }
});

mongoose.models = {}

const Apps = mongoose.model('Apps', AppsSchema);

export default Apps;
