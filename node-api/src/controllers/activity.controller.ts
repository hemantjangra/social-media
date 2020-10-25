import {FastifyRequest, FastifyReply} from 'fastify';
import {getAllActivities, getActivityById, addActivity, editActivity, deleteAcitivity} from '../dal/activity.dal';
import { IActivity } from 'appmodels/activity';

export const findActivities = async(req: FastifyRequest, reply: FastifyReply) => {
    try{
        const activities = await getAllActivities();
        return reply.status(200).send(activities);
    }catch(err){
        throw(new Error(err));
    }
};

export const findActivityById = async(req: FastifyRequest, reply: FastifyReply) => {
    try {
        const {params} = req;
        const {id} = <any>params;
        const activity = await getActivityById(id);
        return reply.status(200).send(activity);
    } catch (error) {
        return reply.send(500);
    }
};

export const postActivity = async(request: FastifyRequest, reply: FastifyReply) => {
    try{
        const {body} = request;
        const activity = <IActivity>body;
        const addedActivity = await addActivity(activity);
        return reply.status(200).send(addedActivity);
    }catch(err){
        throw(new Error(err));
    }
};

export const updateActivity = async(req: FastifyRequest, reply: FastifyReply) => {
    try {
        const {params, body} = req;
        const {id} = <any>params;
        const activity = <IActivity>body;
        const updatedActivity = await editActivity(id, activity);
        return reply.status(200).send(updatedActivity);
    } catch (error) {
        throw new Error(error);
    }
};

export const deleteActivity = async(req: FastifyRequest, reply: FastifyReply) => {
  try{
        const {params} = req;
        const {id} = <any>params;
        const deletedActivity = await deleteAcitivity(id);
        return reply.status(200).send(deletedActivity);
  }  catch(error){
    throw new Error(error);
  }
};