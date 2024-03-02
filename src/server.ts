import  express,{ Request,Response } from 'express';
import cors from 'cors';
import publicRouter from './routes';
import sequelize from './sqlDatabase';
import connectMongoDB from './nosqlDatabase';
import logger from './logger';

const app = express();
const port  = 3100;

const options = {
    origin : ['*'],
    methods:'GET,HEAD,PUT,POST,PATCH,DELETE',
    credentials : true,
    optionsSuccessStatus:204
};
app.use(cors(options));


app.use(express.json());

app.use(publicRouter);

//api client

//const apiClient  = new DBService(app);

app.listen(port,async () => {
    try{
        await sequelize.authenticate();
        logger.info('connected to mysql'); 
        sequelize.sync({ force: true }).then(() => {
            console.log('Database synchronized');
          });
        connectMongoDB();
    }catch(err:any){
        logger.error(err);
    };
    console.log(`App is running on port ${port}`);
});