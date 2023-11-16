const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const Cadastro = require('./models/cadastro');
const loginRouter = require('./models/login1');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));
app.use(express.static("views"))

app.get('/login', (req,res)=>{
  res.render('login')
});

app.get('/register', (req , res) => {
  res.render('register');
});

app.get('/index', (req, res) => {
  res.render('index');
});


app.post('/register', (req, res)=>{
  Cadastro.create({
    username: req.body.username,
    password: req.body.password
  }). then(function(){
    res.redirect('/index')
  }).catch(function(err){
    res.send('Erro ao cadastrar:' + err)
  })
});


app.use(loginRouter);


const port = 3000;
app.listen(port, (req ,res) => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
