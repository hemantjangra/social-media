//import {connect} from '../../src/mongo/connect';
import mongoose from 'mongoose';
import {build} from '../../src/app';



describe('activity controller', () => {

    it('getAllActivities should return empty array when no data present', async() =>{
        const app = build({logger:{ level: 'info', prettyPrint: true}});
        console.log('test invoked');

        // connect('mongodb://localhost:27017', {useNewUrlParser: true, useCreateIndex: true});
        await mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useCreateIndex: true});

        const response = await app.inject({
            method: 'GET',
            url: '/api/activity/'
        });

        expect(response.statusCode).toBe(200);
        expect(response.body).toBe("[]");
    });
    
});





