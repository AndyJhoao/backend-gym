"use strict";
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Cliente = require("./models/Cliente");
const Report_Products = require("./models/Reporte_productos");
const Report_Ventas = require("./models/Reporte_ventas");
const Report_Clientes = require("./models/Reporte_clientes");
const Report_Proveedores = require("./models/Reporte_proveedores");
const Report_Maquinas = require("./models/Reporte_maquinas");
const Personal = require("./models/Personal");
const Producto = require("./models/Producto");
const Maquina = require("./models/Maquina");

const jwt = require("jsonwebtoken");
const moment = require("moment");
moment.locale("es");
moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

const port = process.env.port || 5000;
mongoose
  .connect(
    "mongodb+srv://admin:gymspartans@gym-spartans.ynbdd.mongodb.net/Gymspartans-db?retryWrites=true&w=majority",
    {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then((db) => console.log("DB Connect" + db))
  .catch((err) => console.error(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola");
});
app.post("/home/products/agregar-producto", (req, res) => {
  console.log(req.body);
  const product = new Producto({
    nom_producto: req.body.name_product,
    precio_compra: req.body.precio_compra,
    precio_venta: req.body.precio_venta,
    cant_existencia: 0,
    descripcion: req.body.descripcion,
    id_proveedor: req.body.proveedor,
    fecha: Date.now(),
  });
  product.save((err) => {
    if (err)
      return res.status(400).json({
        title: "No se pudo crear el producto",
        error: "No se pudo man",
      });
    else {
      return res.status(200).json({ title: "Producto creado correctamente" });
    }
  });
});

app.post("/login", (req, res) => {
  Personal.findOne({ n_usuario: req.body.name }, (err, personal) => {
    if (err)
      return res.status(500).json({
        title: "Server error",
        error: err,
      });
    if (!personal)
      return res.status(401).json({
        title: "Usuario no encontrado",
        error: "Credenciales Invalidas",
      });
    if (req.body.password != personal.contraseña) {
      return res.status(401).json({
        title: "Login failed",
        error: "Credenciales Invalidas",
      });
    }
    let token = jwt.sign({ userId: personal._id }, "secretkey");
    return res.status(200).json({
      title: "Usuario autenticado",
      token: token,
      permisos: personal.permisos,
    });
  });
});

app.post("/home/clients", (req, res) => {
  let suscripcion;
  if (req.body.suscripcion == "mes") suscripcion = moment().add(1, "M");
  else suscripcion = moment().add(1, "y");

  const client = new Cliente({
    nombre: req.body.nombre,
    genero: req.body.sexo,
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    apellidos: req.body.apellidos,
    observaciones: req.body.observaciones,
    fecha: Date.now(),
    tipo_suscripcion: req.body.suscripcion,
    membresia: true,
    tipo_pago: req.body.tipopago,
    cuota: req.body.precio,
    renovar: true,
    estado_suscripcion: {
      horario: moment(),
      ini_suscripcion: moment(),
      exp_suscripcion: suscripcion,
    },
  });
  client.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "Error",
        error: "No se pudo man",
      });
    } else {
      return res.status(200).json({ title: "Usuario creado correctamente" });
    }
  });
});
app.post("/home/clients/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Cliente.deleteOne({ _id: id })
    .then(() => {
      return res.status(200).json({
        title: "Usuario eliminado correctamente",
      });
    })
    .catch((err) => console.log(err));
});
app.post("/home/clients/edit-clients/:id", (request, response) => {
  const id = request.params.id;
  const data = request.body;
  data.cuota = data.cuota.$numberDecimal;
  console.log(data);
  Cliente.findByIdAndUpdate(id, data, { new: true })
    .then(() => {
      return response.status(200).json({
        title: "Cliente actualizado correctamente",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/home/personal", (req, res) => {
  let permisosPersonal = 1;
  if (req.body.permisos == "administrador" || req.body.permisos == 2) {
    permisosPersonal = 2;
  }
  const personal = new Personal({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    puesto: req.body.puesto,
    n_usuario: req.body.username,
    contraseña: req.body.password,
    permisos: permisosPersonal,
    fecha: Date.now(),
  });
  personal.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "Error",
        error: "No se pudo man",
      });
    } else {
      return res.status(200).json({ title: "Personal creado correctamente" });
    }
  });
});
app.post("/home/personal/edit-personal/:id", (request, response) => {
  const id = request.params.id;
  const data = request.body;
  console.log(id);
  console.log(data);
  if (request.body.permisos == "administrador" || request.body.permisos == 2) {
    request.body.permisos = 2;
  } else {
    request.body.permisos = 1;
  }
  Personal.findByIdAndUpdate(id, data, { new: true })
    .then(() => {
      return response.status(200).json({
        title: "Personal actualizado correctamente",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/home/crear-maquina", (request, response) => {
  console.log(request.files);
  const maquina = new Maquina({
    nombre: request.body.nombre,
    descripcion: request.body.descripcion,
    imagen: request.body.imagen,
    estado: false,
  });
  maquina.save((err) => {
    if (err) {
      return response.status(400).json({
        title: "Error",
        error: err,
      });
    } else {
      return response
        .status(200)
        .json({ title: "Maquina creada correctamente" });
    }
  });
});
app.get("/home/maquina", (request, response) => {
  Maquina.find({})
    .then((data) => {
      return response.send(data);
    })
    .catch((err) => {
      return response.send(err);
    });
});

app.post("/home/personal/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Personal.deleteOne({ _id: id })
    .then(() => {
      return res.status(200).json({
        title: "Personal eliminado correctamente",
      });
    })
    .catch((err) => console.log(err));
});
app.post("/home/reports/products", (req, res) => {
  console.log(req.body);
  const report_products = new Report_Products({
    type: "Producto",
    description: "Descripcion de los productos vendidos abreviado",
    fecha_reporte: Date.now(),
  });
  report_products.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "Error",
        error: "No se pudo man",
      });
    }
  });
});
app.post("/home/reports/ventas", (req, res) => {
  console.log(req.body);
  const report_ventas = new Report_Ventas({
    type: "Ventas",
    description: "Descripcion de las ventas por mes o por fecha",
    fecha_reporte: Date.now(),
  });
  report_ventas.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "Error",
        error: "No se pudo man",
      });
    }
  });
});
app.post("/home/reports/proveedores", (req, res) => {
  console.log(req.body);
  const report_proveedores = new Report_Proveedores({
    type: "Proveedores",
    description: "Descripcion de los Proveedores y las compras",
    fecha_reporte: Date.now(),
  });
  report_proveedores.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "Error",
        error: "No se pudo man",
      });
    }
  });
});
app.post("/home/reports/clientes", (req, res) => {
  console.log(req.body);
  const report_clientes = new Report_Clientes({
    type: "Clientes",
    description: "Descripcion de los clientes hasta la fecha",
    fecha_reporte: Date.now(),
  });
  report_clientes.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "Error",
        error: "No se pudo man",
      });
    }
  });
});
app.post("/home/reports/maquinas", (req, res) => {
  console.log(req.body);
  const report_maquinas = new Report_Maquinas({
    type: "Maquinas",
    description: "Descripcion de las maquinas y sus usos",
    fecha_reporte: Date.now(),
  });
  report_maquinas.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "Error",
        error: "No se pudo man",
      });
    }
  });
});
app.post("/home/signup", (req, res) => {
  console.log(req.body);
  const personal = new Personal({
    registro: "1",
    nombre: "Andy",
    apellidos: "Jhoao",
    puesto: "administrador",
    n_usuario: "andy",
    contraseña: "1234",
    permisos: 1,
    fecha: Date.now(),
  });
  personal.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "Error",
        error: "No se pudo man",
      });
    }
  });
});
app.post("/home/products/update-all-products", (request, response) => {
  const listProducts = request.body;
  listProducts.forEach((product) =>
    Producto.findByIdAndUpdate(
      product.id,
      {
        $inc: { cant_existencia: product.cant_existencia },
      },
      {
        new: true,
      }
    ).then(() => {
      return response.status(200).json({
        title: "Producto actualizado " + product.nom_producto,
      });
    })
  );
});
app.get("/home/products/actualizar-producto", (req, res) => {
  Producto.find({})
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/home/products/actualizar-producto/:id", (req, res) => {
  Producto.findOne({ _id: req.params.id })
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/home/products/editar-producto/:id", (request, response) => {
  const id = request.params.id;
  const data = request.body;
  Producto.findByIdAndUpdate(id, data, { new: true })
    .then(() => {
      return response.status(200).json({
        title: "Producto actualizado correctamente",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/home/clients", (req, res) => {
  Cliente.find({})
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/home/clients/:id", (req, res) => {
  Cliente.findOne({ _id: req.params.id })
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/home/personal", (req, res) => {
  Personal.find({})
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/home/personal/:id", (req, res) => {
  Personal.findOne({ _id: req.params.id })
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/home/reports/:type", (req, res) => {
  let type_report = req.params.type;
  switch (type_report) {
    case "products":
      Report_Products.find({})
        .then((data) => {
          return res.send(data);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case "clientes":
      Report_Clientes.find({})
        .then((data) => {
          return res.send(data);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case "ventas":
      Report_Ventas.find({})
        .then((data) => {
          return res.send(data);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case "proveedores":
      Report_Proveedores.find({})
        .then((data) => {
          return res.send(data);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case "maquinas":
      Report_Maquinas.find({})
        .then((data) => {
          return res.send(data);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      Report_Products.find({})
        .then((data) => {
          return res.send(data);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
  }
});
// app.get("/home/signup", (req, res) => {
//   Personal.find({})
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.post("/home/products/actualizar-producto/:id", (req, res) => {
  Producto.deleteOne({ _id: req.params.id }).then(() => {
    return res.status(200).json({
      title: "Producto eliminado correctamente",
    });
  });
});
// app.post("/home/products/actualizar-producto/:id", async (req, res) => {
//   let producto = req.body;
//   const response = await Producto.updateOne({});
// });
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`server running on port ${port}`);
});
