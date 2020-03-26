const jwt = require('jsonwebtoken');

module.exports = {
    login: async function(req, res) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if(user.password === password) {
                return res.status(200).json({
                    token: jwt.sign(user.toJSON(), 'secret'),
                });
            } else {
                return res.status(400).json({message: 'Senha inválida.'});
            }
        } catch (error) {
            return res.status(400).json({message: "Usuário não encontrado."});
        }
    }
};

