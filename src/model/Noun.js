const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Noun extends Model {}

Noun.init({
    // add properites here, ex:
    word: {
         type: DataTypes.STRING,
         allowNull:false,
    },
    type:{
        type: DataTypes.STRING,
        default: "Noun"
    }
},{
    sequelize,
});

module.exports=Noun