'use strict';


module.exports = (app, db) => {

    app.post('/login', (req, res) => {
        const email = req.body.email;
        const socialNetworkId = req.body.socialNetworkId;
        const socialNetwork = req.body.socialNetwork;

        db.user.findOrCreate({where: {email: email}})
        .then(user => {
            db.userSocialMedia.findOrCreate({
                where: {
                    userId: user[0]['dataValues']['id'],
                    socialNetworkId: socialNetworkId,
                    socialNetwork: socialNetwork
                }})
            .then(userSocialMedia => {
                res.json(user[0]['dataValues']['uuid']);
            })
            .catch(err => {
                res.status(400);
                res.render('error', { error: err });
            }) 
        })
        .catch(err => {
            res.status(400); 
            res.render('error', { error: err });
        }) 

    });

};