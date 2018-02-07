module.exports = (sequelize, DataTypes) => {
    const Clothing = sequelize.define('Clothing', 
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
            description: {
                type: DataTypes.STRING(250)
            },
            expiresAt: {
                type: DataTypes.DATE,
                field: 'expires_at'
            },
            image: {
                type: DataTypes.STRING(250)
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'user_id'
            }
        }, 
        { 
            freezeTableName: true,
            tableName: 'clothing',  
            timestamps: true,
            underscored: true
        }
    );
    return Clothing;
};