import Swal from "sweetalert2";
import axios from "axios";

export default document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-eliminar")) {
    const idNave = e.target.dataset.id;

    // console.log(idNave);

    Swal.fire({
      title: "Deseas borrar esta Nave?",
      text: "Una Nave eliminada no se puede recuperar..",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar",
      cancelButtonText: "No, Cancelar",
    })
      .then((result) => {
        if (result.isConfirmed) {
          //Enviar peticion a Axios
          let url = `${location.origin}/${idNave}`;

          // console.log(url);

          axios.delete(url, { params: { idNave } }).then((res) => {
            // console.log(res);
            Swal.fire("Eliminado!", `${res.data}`, "success");

            // redirect home
            setTimeout(() => {
              window.location.href = "/";
            }, 1000);
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


