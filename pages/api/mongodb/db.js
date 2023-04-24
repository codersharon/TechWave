import mongoose from 'mongoose'
const MONGO_URI = process.env['MONGO_URI']

const connectToDB = handler => async (req, res)=>{
	if(mongoose.connections[0].readyState) {
		return handler(req, res);
	} else {
		await mongoose.connect(MONGO_URI)
		return handler(req, res);
	}
}

export default connectToDB;