import activity from '../models/activity';
import {Document} from 'mongoose';
import { IActivity } from 'appmodels/activity';

export const getAllActivities = async ():Promise<Document[] | null> => {
    return activity.find().then(docs => {
        return docs.map(doc => doc?.toJSON());
    });
}

export const getActivityById = async (id: string): Promise<Document | null> => {
    return activity.findById({_id: id}).then(doc => {
        return doc?.toJSON();
    });
}

export const addActivity = async (activityDto: IActivity): Promise<Document> => {
    const activityEntity = new activity(activityDto);
    return activityEntity.save().then(doc => doc.toJSON());
}

export const editActivity = async (uid: string, activityDto: IActivity): Promise<Document> => {
    const {id, ...activityObj} = activityDto;
    return activity.findByIdAndUpdate(
        uid,
        activityObj,
        {upsert: true})
            .then(doc => 
                doc?.toJSON()
                );
}

export const deleteAcitivity = async (id: string): Promise<Document | null> => {
    return activity.findOneAndDelete({_id: id}).then(doc => doc?.toJSON());
}