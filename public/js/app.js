// importacion de modulos
import eliminar from "./modulos/eliminarNave";
import Nave from "./modulos/nave";
import Lanzadora from "./modulos/lanzadora";
import NoTripulada from "./modulos/noTripulada";
import Tripulada from "./modulos/tripulada";
import eliminarNave from "./modulos/eliminarNave";

// console.log(Nave);
// console.log(Lanzadora);
// console.log(NoTripulada);
// console.log(Tripulada);

// const bulma = new Tripulada("bulmanave", "china", "h20", "Tripulada");

// console.log(bulma);
// console.log(bulma.getNombre);
// console.log(bulma.getPais);
// console.log(bulma.getCombustible);
// console.log(bulma.getTipo);
// console.log(bulma.pasajeros());
// console.log(bulma.mostrarInformacion());
// console.log(bulma.despegar())
// console.log(bulma.llenarCombustible())

// declaracion de variables
const d = document,
  $form = d.querySelector("form"),
  $containerButton = d.querySelector(".container-buttons"),
  $titleNave = d.querySelector("h2.title-nave");

let tipo;

// let vehiculoLanzadora;

// declaracion de funciones

// Class UI

class UI {
  addNaves(nave) {
    const listNave = d.getElementById("nave-list"),
      element = d.createElement("div");
    element.innerHTML = `
      <div class="card text-center" >
        <div class="card-body">
          <strong>Nave :${nave.getNombre}</strong>
          <strong>Pais :${nave.getPais}</strong>
          <strong>Combustive :${nave.getCombustible}</strong>
          <strong>Tipo :${nave.getTipo}</strong>
        </div>
      </div>
    `;
    listNave.appendChild(element);
  }
}

// Ejecucion de codigo

// DOM Events

d.addEventListener("click", (e) => {
  if (e.target.matches(".lanzadera")) {
    $form.classList.remove("hidden");
    $form.reset();
    tipo = e.target.dataset.tipo;
    $form.tipo.value = e.target.dataset.tipo;
    $titleNave.textContent = "Ingresa Los Datos De Tu Nave";
    $form.insertBefore(e.target, $form.firstElementChild);

    $containerButton.classList.add("hidden");
  }
  if (e.target.matches(".no-tripulada")) {
    $form.classList.remove("hidden");
    $form.reset();
    tipo = e.target.dataset.tipo;
    $titleNave.textContent = "Ingresa Los Datos De Tu Nave";
    $form.tipo.value = e.target.dataset.tipo;
    $form.insertBefore(e.target, $form.firstElementChild);

    $containerButton.classList.add("hidden");
  }

  if (e.target.matches(".tripulada")) {
    $form.classList.remove("hidden");
    $form.reset();
    tipo = e.target.dataset.tipo;
    $titleNave.textContent = "Ingresa Los Datos De Tu Nave";
    $form.tipo.value = e.target.dataset.tipo;

    $form.insertBefore(e.target, $form.firstElementChild);

    $containerButton.classList.add("hidden");
  }
});

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    if (tipo.value === "Vehiculo Lanzadora") {
      const nombre = d.getElementById("nombre").value;
      const pais = d.getElementById("pais").value;
      const combustible = d.getElementById("combustible").value;
      const tipoNave = tipo;

      const lanzadora = new Lanzadora(nombre, pais, combustible, tipoNave);
      console.log(lanzadora);
      const ui = new UI();
      ui.addNaves(lanzadora);
    }

    if (tipo.value === "No Tripulada") {
      const nombre = d.getElementById("nombre").value;
      const pais = d.getElementById("pais").value;
      const combustible = d.getElementById("combustible").value;
      const tipoNave = tipo;

      const noTripulada = new NoTripulada(nombre, pais, combustible, tipoNave);
      console.log(noTripulada);
      const ui = new UI();
      ui.addNaves(noTripulada);
    }

    if (tipo.value === "Tripulada") {
      const nombre = d.getElementById("nombre").value;
      const pais = d.getElementById("pais").value;
      const combustible = d.getElementById("combustible").value;
      const tipoNave = tipo;

      const tripulada = new Tripulada(nombre, pais, combustible, tipoNave);
      console.log(tripulada);
      const ui = new UI();
      ui.addNaves(tripulada);
    }
  }
});

d.addEventListener("keyup", (e) => {
  if (e.target.matches("#search")) {
    if (e.key === "Escape") e.target.value = "";
    d.querySelectorAll("tbody tr").forEach((el) =>
      el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? el.classList.remove("filter")
        : el.classList.add("filter")
    );
  }
});

//
// persistencia de datos con indexedDB

// const vehiculoLanzadora = new Lanzadora();

// if (vehiculoLanzadora) $form.classList.remove("hidden");
