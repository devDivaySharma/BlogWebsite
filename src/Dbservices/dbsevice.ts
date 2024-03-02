import sequelize from "../sqlDatabase";
import { DbServiceIntreface } from "./dbserviceInterface";
import supertest from 'supertest';

export class DBService implements DbServiceIntreface{
    
    private readonly app:any
    
    constructor(app:any){
        this.app = app;
    }
    
    
    async post(url: string, data: any): Promise<any> {
        const response = await supertest(this.app)
            .post(url)
            .send(data);
            return response.body;
    }

    async get(url: string): Promise<any> {
        const response = await supertest(this.app).get(url);
        return response.body;
    }

    async put(url: string, data: any): Promise<any> {
        const response = await supertest(this.app)
        .put(url)
        .send(data);
        return response.body;
    }

    async delete(url: string): Promise<any> {
        const response = await supertest(this.app).delete(url);
        return response.body;
    }
}