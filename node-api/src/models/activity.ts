import { Schema, model } from 'mongoose';
import {v4 as uuidv4} from 'uuid';

const activitySchema = new Schema({
    _id:{
        type: String,
        default: uuidv4(),
        set: (id: String) => {
            return id;
        },
        get: (id: string) => {
            return id;
        }
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
        getters: true
    }
});

// activitySchema.virtual('id')
//     .get(function(this:{_id: String}){
//         return this._id
//     });

export default model('Activity', activitySchema);