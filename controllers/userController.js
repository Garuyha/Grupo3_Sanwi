const fs = require('fs');
const path = require('path');
const { hashSync} = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../dataBase/users.json');

const users = require('../dataBase/users.json');

const userController={
  formLogin: (req, res) => {
    const user = req.session.user;
    res.render('users/login', { user, error: undefined });
  },
  login:(req, res) => {    
    res.redirect('/');
  },
  register: (req, res) => {
    const user = req.session.user;

    res.render('users/register', { user, error: undefined, errores: undefined });
  },
  store: (req, res) => {
    //multer
    console.log('imagen del form', req.body);

    const newUser = {
      id: `${Date.now()}`,
      username: req.body.username,
      email: req.body.email,
      password: hashSync(req.body.password, 10),
      image: req.file?.filename || "user-default.png"
    }
    const correo=users.find(value=>value.email==newUser.email);
    const name=users.find(value=>value.username==newUser.username);

    console.log('valores*************+++',correo)

    if (correo){
      res.render('users/register', { errores:'El nombre de usuario o email ya se encuentran registrados', error:undefined, old:req.body} )
      console.log('El usuario-----------------')
    }else{ 
      users.push(newUser);
  
      fs.writeFileSync(usersFilePath, JSON.stringify(users));
      /* res.json(users) */
      res.redirect('/');
    }

  }
}
module.exports = userController;