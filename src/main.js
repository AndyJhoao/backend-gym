const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
const router = require("./router");
const path = require("path");
// const { createSSRapp } = require("vue");
// const { renderToString } = require("@vue/server-renderer");
// const manifest = require("../dist/ssr-manifest.json");

const fileUpload = require("express-fileupload");

const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.DB, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connect"))
  .catch((err) => console.error(err));

// const appPath = path.join(__dirname, "../dist", manifest["app.js"]);
// const App = require(appPath).default;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(fileUpload());

// app.post("/home/products/actualizar-producto/:id", async (req, res) => {
//   let producto = req.body;
//   const response = await Producto.updateOne({});
// });
router(app);
app.use(express.static(path.join(__dirname, "./public")));
// app.get("*", (request, response) => {
//   const ssrApp = createSSRapp(App);
//   const appContent = renderToString(ssrApp);
//   const html = `
//   <html>
//     <head>
//       <title>
//         Hello
//       </title>
//     </head>
//     <body>
//       ${appContent}
//     </body>
//   </html>
//   `;
//   response.end(html);
// });
server.listen(port, function () {
  console.log("server is running in localhost:" + port);
});
