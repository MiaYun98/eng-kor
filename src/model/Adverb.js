const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Adverb extends Model {}

Adverb.init({
    // add properites here, ex:
    word: {
         type: DataTypes.STRING,
         allowNull:false,
    },
    type:{
        type: DataTypes.STRING,
        default: "Adverb"
    }
},{
    sequelize,
});

module.exports=Adverb