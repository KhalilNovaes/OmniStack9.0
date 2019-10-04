//metodos
// index = listagem de sessoes 
// show = listar uma unica sessao 
// store = criar uma sessão 
// update = alterar uma sessão 
// destroy = deletar uma sessão

const User = require('../models/User')

module.exports = {
    async store(req,res){
        const {email} = req.body;

        let user = await User.findOne({email:email})

        if(!user){
            const user = await User.create({ email });  
        }

        return res.json(user);
    }
};