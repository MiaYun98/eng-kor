const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Verb extends Model {}

Verb.init({
    // add properites here, ex:
    word: {
         type: DataTypes.STRING,
         allowNull:false,
    },
    type:{
        type: DataTypes.STRING,
        default: "Verb"
    }
},{
    sequelize,
});

module.exports=Verb