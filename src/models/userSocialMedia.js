module.exports = (sequelize, DataTypes) => {
    const UserSocialMedia = sequelize.define('UserSocialMedia', 
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
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'user_id'
            },
            socialNetwork: {
                type: DataTypes.ENUM,
                values: ['facebook', 'instagram'],
                field: 'social_network'
            },
            socialNetworkId: {
                type: DataTypes.STRING(250),
                field: 'social_network_id'
            }
        }, 
        { 
            freezeTableName: true,
            tableName: 'user_social_media', 
            timestamps: true,
            underscored: true
        }
    );
    return UserSocialMedia;
};