import fastify, {FastifyInstance} from 'fastify';
import swagger from 'fastify-swagger';
import { Server, IncomingMessage, ServerResponse } from "http";
import mongoose from 'mongoose';
import {config} from './config';
import {activityRoute} from './routes';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({logger: true});

server.get('/ping', async(request, response) => {
    return response.send('working');
});

server.register(activityRoute, {prefix: '/api/activity'});

server.listen(5000, (err, address) =>{
    if(err){
        console.error(err);
        process.exit(1);
    }
    console.log(`server is listening at ${address}`);
});

export default server;

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> server.log.info('Mongo connected')).catch(err => server.log.error(err));
