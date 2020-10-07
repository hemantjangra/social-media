import activity from '../models/activity';
import {FastifyRequest, FastifyReply} from 'fastify';
import {getAllActivities, addActivity} from '../dal/activity.dal';
import { IActivity } from 'appmodels/activity';

export const findActivities = async(req: FastifyRequest, reply: FastifyReply) => {
    try{
        console.log('get activity route found');
        const activities = await getAllActivities();
        return activities;
    }catch(err){
        throw(new Error(err));
    }
};

export const postActivity = async(request: FastifyRequest, reply: FastifyReply) => {
    try{
        console.log('post activity route found');
        const {body} = request;
        const activity = <IActivity>body;
        console.log('Activity recieved in post request is: ', activity);
        return await addActivity(activity);
    }catch(err){
        throw(new Error(err));
    }
};