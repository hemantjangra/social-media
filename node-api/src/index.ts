import fastify, {FastifyInstance} from 'fastify';
import swagger from 'fastify-swagger';
import { Server, IncomingMessage, ServerResponse } from "http";

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({logger: true});

server.get('/ping', async(request, response) => {
    return response.send('working');
});

server.listen(5000, (err, address) =>{
    if(err){
        console.error(err);
        process.exit(1);
    }
    console.log(`server is listening at ${address}`);
});