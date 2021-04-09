<template>
  <div>
    <main>
      <section>
        <h1>
          <router-link to="/home/"> Home - > </router-link>
          <router-link to="/home/reports/"> Reportes - > </router-link>
        </h1>
        <div class="contenedor-1">
          <div class="caja-Ventas">
            <a href="">
              <img
                src="/imagenes/ventas.png"
                alt="Ventas"
                width="300px"
                height="300px"
              />
              <h2>Ventas</h2>
            </a>
          </div>

          <div class="caja-Proveedores">
            <a href="/">
              <img
                src="/imagenes/proveedores.png"
                alt="Proveedores"
                width="300px"
                height="300px"
              />
              <h2>Proveedores</h2>
            </a>
          </div>

          <div class="caja-RMaquina">
            <a href="">
              <img
                src="/imagenes/Rmaquinas.png"
                alt="Reportes de Maquinas"
                width="300px"
                height="300px"
              />
              <h2>Maquinas</h2>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.contenedor-1 {
  /*background-color: blue;*/
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3em;
  margin: 1em;
}
.caja-Ventas {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Ventas:hover {
  transform: scale(1.3);
}
.caja-Proveedores {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Proveedores:hover {
  transform: scale(1.3);
}
.caja-Proveedores a {
  text-decoration: none;
  color: black;
}
.caja-RMaquina {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-RMaquina:hover {
  transform: scale(1.3);
}
h2 {
  font-size: 3em;
  padding: 0.5em;
}
</style>
