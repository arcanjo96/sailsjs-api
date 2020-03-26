/**
 * PetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: async function(req, res) {
        const pets = await Pet.find();
        res.status(200).json(pets);
    },
    create: async function(req, res) {
        const data = {
            color: req.body.color,
            name: req.body.name,
            owner: req.user.id
        }
        const pet = await Pet.create(data);
        res.status(200).json(pet);
    },
};

