const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
	name: { type: String, required: true},
	email: { type: String, required: true },
	role: { type: String, required: true },
	pass: { type: String, required: true },
	adid: { type: String, required: true }
});

mongoose.models = {}

const Admins = mongoose.model('Admins', AdminSchema);

export default Admins;
