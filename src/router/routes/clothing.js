'use strict';

module.exports = (app, db) => {

    // list
    app.get('/feed', (req, res) => {
        db.clothing.findAll()
            .then(clothing => {
                res.json(clothing);
            });
    });

    app.get('/clothing', (req, res) => {
        db.clothing.findAll()
            .then(clothing => {
                res.json(clothing);
            });
    });

    // retrieve
    app.get('/clothing/:id', (req, res) => {
        const id = req.params.id;
        db.clothing.find({
            where: { uuid: id}
        })
        .then(clothing => {
            res.json(clothing);
        });
    });

    // create
    app.post('/clothing', (req, res) => {
        const description = req.body.description;
        const expires_at = req.body.expires_at;
        const image = req.body.image;
        const userId = req.body.userId;
        db.clothing.create({
            description: description,
            expires_at: expires_at,
            image: image,
            userId: userId,
        })
        .then(newClothing => {
            res.json(newClothing);
        });
    });

    // update
    app.patch('/clothing/:id', (req, res) => {
        const id = req.params.id;
        const updates = req.body.updates;
        db.clothing.find({
        where: { uuid: id }
        })
        .then(clothing => {
            return clothing.updateAttributes(updates)
        })
        .then(updatedclothing => {
            res.json(updatedclothing);
        });
    });

    // destroy
    app.delete('/clothing/:id', (req, res) => {
        const id = req.params.id;
        db.clothing.destroy({
        where: { uuid: id }
        })
        .then(deletedclothing => {
            res.json(deletedclothing);
        });
    });

};