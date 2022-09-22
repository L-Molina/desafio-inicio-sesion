const express = require("express");
const router = express.Router();

const products = require("./product/productosRouter");
const productsList = require("./product/productListRouter");
const productosFaker = require("./product/productosFakerRouter");
const home = require("./home/homeRouter");
const homeFaker = require("./home/homeFakerRouter");
const login = require("./login/loginRouter");
const loginError = require("./login/loginErrorRouter");
const register = require("./login/registerRouter");;
const logout = require("./login/logoutRouter");

//middleware
router.use("/productos", products);
router.use("/lista-productos", productsList);
router.use("/", home);
router.use("/login", login);
router.use("/loginerror", loginError);
router.use("/register", register);
router.use("/logout", logout);
router.use("/api/productos-test", homeFaker);
router.use("/api/faker-list", productosFaker);

module.exports = router;