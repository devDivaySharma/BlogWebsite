import { Sequelize } from "sequelize";
import { MysqlIntreface } from "./mysqIntreface";
import logger from "../logger";

export class MysqlDbService implements MysqlIntreface{
    private sequelize:Sequelize;

    constructor(config:any){
        this.sequelize = new Sequelize(config);
    }

    async connect(): Promise<void> {
        try{
           await this.sequelize.authenticate();
            logger.info('Mysql Connected');
        }catch(err){
            logger.error('Mysql err',err);
            throw err;
        }
    }
    async disconnect(): Promise<void> {
        await this.sequelize.close();
        logger.info('Mysql connection close');
    }

    async executeQuery(query: string, params?: any[] | undefined): Promise<any> {
        try {
            const result = await this.sequelize.query(query,{
                replacements: params
            });
            return result;
        } catch (error) {
            logger.error('Mysql conncetion Error',error);
            throw error;
        }
    }

}