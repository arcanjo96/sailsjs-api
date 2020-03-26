/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: async function(req, res) {
        const users = await User.find().populate('pet');
        res.status(200).json(users);
    },
    protectedRoute: function (req, res) {
        res.status(200).json(req.user);
    },
};

