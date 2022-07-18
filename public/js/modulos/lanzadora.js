import Nave from "./nave";

export default class Lanzadora extends Nave {
  #tipo
  constructor(nombre, pais, combustible, tipo) {
    super(nombre, pais, combustible);
    this.#tipo = tipo;
  }

  set setTipo(tipo) {
    this.#tipo = tipo;
  }

  get getTipo(){
    return this.#tipo;
  }

  despegar() {
    return `La nave comienza a Despegar..🚀🚀🚀.`;
  }
  aterrizar() {
    return `La nave va a aterrizar...🚀🚀🚀.`;
  }
  llenarCombustible() {
    return `
    ⛽Llenando Combustible⛽
    🚀🚀Combustible Lleno Listos Para Despegar..🚀🚀
    `;
  }
}
