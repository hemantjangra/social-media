import fastify, { FastifyInstance, RouteOptions} from 'fastify';
import {findActivities, findActivityById, postActivity, updateActivity, deleteActivity} from '../controllers/activity.controller';

export const activityRoute = async (server: FastifyInstance) =>{
    server.post('/', postActivity);
    server.get('/', findActivities);
    server.get('/:id', findActivityById);
    server.put('/:id', updateActivity);
    server.delete('/:id', deleteActivity);
};


