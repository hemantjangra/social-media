import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
    title: String,
    description: String,
    category: String,
    dateTime: Date,
    city: String,
    venue:String
})

export default model('Activity', activitySchema);