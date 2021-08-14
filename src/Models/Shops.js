module.exports = (sequelize, DataTypes) =>{
    const Shops = sequelize.define('shops', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING
            },
            brand: {
                type: DataTypes.STRING
            },
            validity:{
                type: DataTypes.DATE
            },
        },
        {
            tableName: "shops",
            freezeTableName: true,
        })
    return Shops
}
