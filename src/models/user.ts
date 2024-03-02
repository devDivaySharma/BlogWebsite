import { DataTypes } from "sequelize";
import sequelize from "../sqlDatabase";

const UserModel = sequelize.define('User',{
    id: {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey:true
    },
    username : {
        type : DataTypes.TEXT,
        allowNull:false
    },
    firstName : {
        type : DataTypes.TEXT,
        allowNull:true
    },
    lastName : {
        type : DataTypes.TEXT,
        allowNull:true
    },
    password : {
        type : DataTypes.TEXT,
        allowNull:false
    }
});

export default UserModel;