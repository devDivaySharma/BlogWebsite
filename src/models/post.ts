import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../sqlDatabase";
import UserModel from "./user";
import CommentModel from "./comment";

const PostModel = sequelize.define('Post',{
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    title: {
        type : DataTypes.STRING,
        allowNull : false,
    },
    content : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
});

PostModel.belongsTo(UserModel, { foreignKey: 'userId' });
PostModel.hasMany(CommentModel, { foreignKey: 'postId', onDelete: 'CASCADE', hooks: true });

export default PostModel;