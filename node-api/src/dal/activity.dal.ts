import activity from '../models/activity';
import {Document} from 'mongoose';
import { IActivity } from 'appmodels/activity';

export const getAllActivities = async ():Promise<Document[] | null> => {
    return await activity.find().lean();
}

export const getActivityById = async (id: string): Promise<Document | null> => {
    return await activity.findById({_id: id}).lean();
}

export const addActivity = async (activityDto: IActivity): Promise<boolean> => {
    const activityEntity = new activity(activityDto);
    const result = await activityEntity.save();
    if(result){
        return true;
    }
    return false;
}

export const updateActivity = async (activityDto: IActivity): Promise<boolean> => {
    const activityEntity = new activity(activityDto);
    const result = await activity.findOneAndUpdate({_id: activityDto.id}, activityEntity, {upsert: true}).lean();
    if(result){
        return true;
    }
    return false;
}

export const deleteAcitivity = async (id: string): Promise<boolean> => {
    const result = await activity.findOneAndDelete({_id: id});
    if(result){
        return true;
    }
    return false;
}