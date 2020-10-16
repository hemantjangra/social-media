import { Schema, model } from 'mongoose';
import {v4 as uuidv4} from 'uuid';

const activitySchema = new Schema({
    _id:{
        type: String,
        default: uuidv4(),
        get: (id: string) => {
            return id;
        },
        
        set: (id: String) => {
            return id;
        },
    },
    title: String,
    description: String,
    category: String,
    dateTime: Date,
    city: String,
    venue:String
},
{
    toJSON:{
        getters: true,
        transform: (doc, obj) =>{
            delete obj._id;
            delete obj.__v;
            return obj;
        }
    }
});

export default model('Activity', activitySchema);