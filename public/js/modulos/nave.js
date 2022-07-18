//Clase Madre NAVES
export default class Nave {
  #nombre;
  #pais;
  #combustible;

  constructor(nombre, pais, combustible) {
    this.#nombre = nombre;
    this.#pais = pais;
    this.#combustible = combustible;
  }

  set setNombre(nombre) {
    this.#nombre = nombre;
  }

  set setPais(pais) {
    this.#pais = pais;
  }

  set setCombustible(combustible) {
    this.#combustible = combustible;
  }

  get getNombre() {
    return this.#nombre;
  }
  get getPais() {
    return this.#pais;
  }
  get getCombustible() {
    return this.#combustible;
  }
  despegar() {}
  aterrizar() {}
}
