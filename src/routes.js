const routes = require('express').Router();

routes.get('/usuarios', (req, res) => {
    res.json({msg : "usuarios!"});
})

routes.post('/usuarios', (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    res.json({msg : `O nome é ${nome}/ A idade é ${idade}`});
})

module.exports = routes;