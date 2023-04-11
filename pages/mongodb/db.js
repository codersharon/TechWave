import mongoose from 'mongoose'

const connectToDB = handler => async (req, res)=>{
	if(mongoose.connections[0].readyState) {
		return handler(req, res);
	} else {
		await mongoose.connect("mongodb+srv://sharonsandeep46655:gTK3ZuAIYKPUS6DD@cluster0.c6muzqb.mongodb.net/?retryWrites=true&w=majority")
		return handler(req, res);
	}
}

export default connectToDB;