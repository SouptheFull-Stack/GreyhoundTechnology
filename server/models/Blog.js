import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true
        },
        authorImage: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // STRING datatype only allows up to 255 chars, hence needing TEXT for the content
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATEONLY
        },
        timeSincePost: {
            // Consider how to implement the alogirthm to calculate this, whether it will be an integer or not
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'blog',
        freezeTableName: true,
    }
);

module.exports = Blog;