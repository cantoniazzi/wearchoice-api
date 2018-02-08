'use strict';

module.exports = (app, db) => {

    app.post('/vote', (req, res) => {
        const value = req.body.description;
        const userId = req.body.userId;
        const clothingId = req.body.clothingId;

        db.vote.findOne({
            where: {
                userId: userId,
                clothingId: clothingId
            }
        })
        .then(vote => {
            if(!vote){
                db.vote.create({
                    value: value,
                    userId: userId,
                    clothingId: clothingId
                })
                .then(newVote => {
                    res.json(newVote);
                });
            }
            else {
                res.json({created: false});
            }
        })
    });

};