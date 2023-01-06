 module.exports = (sequelize, DataTypes ) => {

    const todo = sequelize.define('Todos',{
        title:{
            type:DataTypes.STRING,
            allowNull: false
        },
        tasks:{
            type:DataTypes.STRING,
            allowNull: false
        }
    });
    return todo;
};



