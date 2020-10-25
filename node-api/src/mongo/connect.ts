import mongoose from 'mongoose';
import server from "../index";

export const connect = (connectionString: string, opts={}) =>{
    mongoose.connect(connectionString,opts)
        .then(()=> server.log.info('Mongo connected'))
        .catch(err => server.log.error(err));
};