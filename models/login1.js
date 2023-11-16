const express = require('express');
const router = express.Router();
const Usuario = require('./usuarios');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('Dados recebidos:', { username, password });
  console.log(req.body)
  
  try {
    if (!username || !password) {
      return res.status(400).json({ message: 'Preencha todos os campos' });
    }

    const user = await Usuario.findOne({
      where: {
        username: username,
        password: password
      }
    });

    if (user) {
      console.log('Usuário autenticado com sucesso:', user);
      res.redirect('/index');
    } else {
      console.log('Credenciais inválidas');
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro na autenticação:', error);
    res.status(500).json({ message: 'Erro na autenticação' });
  }
});

module.exports = router;
