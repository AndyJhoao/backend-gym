<template>
  <div>
    <main>
      <section>
        <h1>
          <router-link to="/home/"> Home - > </router-link>
          <router-link to="/home/clients/"> Clientes - > </router-link>
        </h1>
        <div class="contenedor-3">
          <div class="caja-Consultar-Clientes">
            <img
              src="/imagenes/Consultar.png"
              alt="Ventas"
              width="300px"
              height="300px"
            />
            <h2>Consultar Clientes</h2>
          </div>

          <div class="caja-Agregar-Clientes">
            <a href="/">
              <img
                src="/imagenes/Agregar.png"
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
                src="/imagenes/Consultar.png"
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
                src="/imagenes/Eliminar.png"
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
