import fastify, { FastifyInstance, RouteOptions} from 'fastify';
import {findActivities, postActivity} from '../controllers/activity.controller';

export const activityRoute = async (server: FastifyInstance) =>{
    server.post('/', postActivity);
    server.get('/', findActivities);
};


