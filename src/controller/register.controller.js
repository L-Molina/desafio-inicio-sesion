const register = require("../utils/register")

class Contenedor {   
  static save(object) {
    return register.saveUser(object);    
  }
}

module.exports = Contenedor;