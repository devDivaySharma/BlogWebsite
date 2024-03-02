import { Sequelize } from "sequelize";

const sequelize = new Sequelize('blogDB','bloguser','blogpassword',{
    host:'localhost',
    dialect:'mysql',
    port : 3306
})

export default sequelize;