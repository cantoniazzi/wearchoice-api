module.exports = (sequelize, DataTypes) => {
    const Vote = sequelize.define('Vote', 
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
            value: {
                type: DataTypes.INTEGER,
                defaultValue: 0
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
            tableName: 'vote',  
            timestamps: true,
            underscored: true
        }
    );
    return Vote;
};