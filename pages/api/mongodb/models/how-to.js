const mongoose = require('mongoose');

const HowToSchema = new mongoose.Schema({
	title: { type: String, required: true},
	content: { type: String, required: false },
	image: { type: String, required: false },
	date: { type: String, required: true },
	tags: { type: Array, required: true },
});

mongoose.models = {}

const HowTo = mongoose.model('HowTo', HowToSchema);

export default HowTo;
