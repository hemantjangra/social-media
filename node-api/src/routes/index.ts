import {RouteOptions} from 'fastify';
import {findActivities} from '../controllers/activity.controller';

const getActivities: RouteOptions = {
    method: 'GET',
    url: '/api/activity',
    handler: findActivities
};
