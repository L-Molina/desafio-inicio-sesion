const { Router } = require("express");
const home = Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

home.get("/", auth, async (req, res) => {
  const datosUsuario = await User.findById(req.user._id); 
  const user = datosUsuario.username;  
  res.render("home", {
    user: user,
  });
});

module.exports = home;