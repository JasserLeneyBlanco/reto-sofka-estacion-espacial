import Nave from "./nave";

export default class NoTripulada extends Nave {
  #tipo
  constructor(nombre, pais, combustible, tipo) {
    super(nombre, pais, combustible);
    this.#tipo = tipo;
  }

  set setTipo(tipo) {
    this.#tipo = tipo;
  }

  get getTipo() {
    return this.#tipo;
  }

  mostrarInformacion() {
    return `Soy una Nave No Tripulada Mi Nombre es : ${this.getNombre}, Fui Creada en el pais : ${this.getPais}`;
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
  objectivo() {
    return `Mi objectivo principal estriba en estudiar otros cuerpos celestes...🪐🌌 `;
  }
}
