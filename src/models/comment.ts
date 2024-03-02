import { DataTypes } from "sequelize";
import sequelize from "../sqlDatabase";
import PostModel from "./post";

const CommentModel = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
  });

  CommentModel.belongsTo(PostModel, { foreignKey: 'postId' });
  
  export default CommentModel;