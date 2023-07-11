import mongoose from 'mongoose';

const frameworkSchema = new mongoose.Schema({
	title: String,
	description: String
});

export const Framework = mongoose.model('framework', frameworkSchema);