import Swal from "sweetalert2";
import axios from "axios";

export default document.addEventListener("click", (e) => {
  if (e.target.matches(".lanzadera")) {
    const tipo = e.target.dataset.tipo;

    // console.log(idNave);

    Swal.fire({
      title: "Deseas Crear una nave Lanzadera?",
      text: "Crearemos una nave lanzadera.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No, Cancelar",
    })
      .then((result) => {
        if (result.isConfirmed) {
          //Enviar peticion a Axios
          let url = `${location.origin}/`;

          // console.log(url);
          axios
            .post(url, {
              nombre: e.target.nombre,
              pais: e.target.pais,
              combustible: e.target.combustible,
              tipo: e.target.tipo,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(() => {
        Swal.fire({
          type: "error",
          title: "Hubo un error",
          text: "No se pudo eliminar la nave",
        });
      });
  }
});
