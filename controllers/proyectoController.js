const Naves = require("../model/Naves");

exports.mostrarNaves = async (req, res) => {
  const naves = await Naves.findAll();
  res.render("index", {
    nombrePagina: "Estacion Espacial Sofka",
    naves,
  });
};

exports.nuevaNave = async (req, res) => {
  // res.send("Enviaste el formulario")
  // console.log(req.body);

  // validar que tengamos algo en el input
  const { nombre, pais, combustible, tipo } = req.body;

  let errores = [];

  if (!nombre) {
    errores.push({ texto: "agrega un nombre" });
  }

  // si hay errores
  if (errores.length > 0) {
    res.render("index", {
      nombrePagina: "Estacion Espacial Sofka",
      errores,
    });
  } else {
    // insertar en la bd
    const nave = await Naves.create({ nombre, pais, combustible, tipo });
    res.redirect("/");
  }
};


exports.eliminarNave = async (req, res, next) => {
  const { idNave } = req.query;

  const resultado = await Naves.destroy({ where: { id: idNave } });

  if (!resultado) {
    return next();
  }

  res.send("Nave Eliminada Correctamente");
};
