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
            },
            firstName: {
                type: DataTypes.STRING(35),
            },
            lastName: {
                type: DataTypes.STRING(35)
            },
            email: {
                type: DataTypes.STRING(250)
            },
            tags: {
                type: DataTypes.STRING
            }
        }, 
        { 
            freezeTableName: true, 
            timestamps: true
        }
    );
    return User;
};