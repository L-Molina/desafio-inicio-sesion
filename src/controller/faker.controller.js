const productosFaker = require("../utils/productosFaker")

class Contenedor {
  static getAll() {
  	return productosFaker.showProductsFaker();
  }    
}

module.exports = Contenedor;