module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            firstName: {
                type: DataTypes.STRING(35),
                field: 'first_name'
            },
            lastName: {
                type: DataTypes.STRING(35),
                field: 'last_name'
            },
            email: {
                type: DataTypes.STRING(250)
            }
        }, 
        { 
            freezeTableName: true,
            tableName: 'user',  
            timestamps: true,
            underscored: true
        }
    );
    return User;
};