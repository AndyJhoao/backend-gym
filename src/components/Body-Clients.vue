<template>
  <div>
    <main>
      <section>
        <h1><router-link to="/home/"> Home </router-link> // Clientes //</h1>
        <div class="contenedor-3">
          <div class="caja-Consultar-Clientes">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/Consultar.png?alt=media&token=fbf27e19-de92-4a9f-b6e5-ea5f154e291e"
              alt="Ventas"
              width="300px"
              height="300px"
            />
            <h2>Consultar Clientes</h2>
          </div>

          <div class="caja-Agregar-Clientes">
            <a href="/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/Agregar.png?alt=media&token=1dc17511-125b-487a-b77b-39128b9d9658"
                alt="Proveedores"
                width="300px"
                height="300px"
              />
              <h2>Agregar Clientes</h2>
            </a>
          </div>

          <div class="caja-Actualizar-Clientes">
            <a href="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/Editar.png?alt=media&token=d8d5a2b8-ef62-480e-a427-f0659a242cb6"
                alt="Reportes de Maquinas"
                width="300px"
                height="300px"
              />
              <h2>Actualizar Clientes</h2>
            </a>
          </div>

          <div class="caja-Eliminar-Clientes">
            <a href="/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/Eliminar.png?alt=media&token=b72d6b70-0877-4d00-adc0-2cf0f7d03dbf"
                alt="Proveedores"
                width="300px"
                height="300px"
              />
              <h2>Eliminar Clientes</h2>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.contenedor-3 {
  /*background-color: blue;*/
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3em;
  margin: 1em;
}
.caja-Consultar-Clientes {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Consultar-Clientes:hover {
  transform: scale(1.3);
}
.caja-Agregar-Clientes {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Agregar-Clientes:hover {
  transform: scale(1.3);
}
.caja-Agregar-Clientes a {
  text-decoration: none;
  color: black;
}
.caja-Actualizar-Clientes {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Actualizar-Clientes:hover {
  transform: scale(1.3);
}
.caja-Eliminar-Clientes {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Eliminar-Clientes:hover {
  transform: scale(1.3);
}
.caja-Eliminar-Clientes a {
  text-decoration: none;
  color: black;
}
h2 {
  font-size: 2em;
  padding: 0.5em;
}
</style>
