module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', 
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
            image: {
                type: DataTypes.STRING(250)
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'user_id'
            },
            clothingId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'clothing_id'
            }
        }, 
        { 
            freezeTableName: true,
            tableName: 'comment',  
            timestamps: true,
            underscored: true
        }
    );
    return Comment;
};