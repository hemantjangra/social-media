import {build} from './app';
import {config} from './config';
import {connect} from './mongo/connect';

const server = build({logger:{ level: 'info', prettyPrint: true}});

server.listen(5000, (err, address) =>{
    if(err){
        console.error(err);
        process.exit(1);
    }
    console.log(`server is listening at ${address}`);
});

connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default server;
