import fastify, {FastifyInstance} from 'fastify';
import swagger from 'fastify-swagger';
import { Server, IncomingMessage, ServerResponse } from "http";

import {activityRoute} from './routes';

export const build = (opts={}) =>{ 

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify(opts);
    app.get('/ping', async(request, response) => {
        return response.send('working');
    });
    app.register(require('fastify-cors'));
    app.register(activityRoute, {prefix: '/api/activity'});
    return app;
}