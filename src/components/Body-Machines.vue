<template>
  <div>
    <main>
      <section>
        <h1>
          <router-link to="/home/"> Home - > </router-link>
          <router-link to="/home/machines"> Maquinas - > </router-link>
        </h1>
        <div class="contenedor-2">
          <div class="imagenes-maquinas">
            <div class="caja-Caminadoras">
              <a href="">
                <img
                  class="imagen"
                  src="1Iy7NWsjj-ujEhN6HQDzCEx4JNTav6Syo"
                  alt="Caminadora"
                  width="200px"
                  height="200px"
                />
                <h2>Caminadoras</h2>
              </a>
            </div>

            <div class="caja-Bicicletas">
              <a href="/">
                <img
                  class="imagen"
                  src="18boyX2uwgsSyDYoUTB7vifiwwmRuvOZR"
                  alt="Bicicleta"
                  width="200px"
                  height="200px"
                />
                <h2>Bicicletas</h2>
              </a>
            </div>

            <div class="caja-Prensa-Pierna">
              <a href="">
                <img
                  class="imagen"
                  src="/imagenes/Prensa.png"
                  alt="Prensa de Pierna"
                  width="200px"
                  height="200px"
                />
                <h2>Prensa Pierna</h2>
              </a>
            </div>

            <div class="caja-Banco-Pesas">
              <a href="">
                <img
                  class="imagen"
                  src="/imagenes/Banco_de_pesas.jpg"
                  alt="Banco de pesas"
                  width="200px"
                  height="200px"
                />
                <h2>Banco de Pesas</h2>
              </a>
            </div>
          </div>

          <div class="imagenes-maquinas">
            <div class="caja-Poleas">
              <a href="/">
                <img
                  class="imagen"
                  src="/imagenes/Polea.jpg"
                  alt="Poleas"
                  width="200px"
                  height="200px"
                />
                <h2>Poleas</h2>
              </a>
            </div>

            <div class="caja-Eliptica">
              <router-link to="/home/machines/eliptica">
                <img
                  class="imagen"
                  src="/imagenes/Eliptica.jpg"
                  alt="Eliptica"
                  width="200px"
                  height="200px"
                />
                <h2>Eliptica</h2>
              </router-link>
            </div>

            <div class="caja-Remo">
              <a href="/">
                <img
                  class="imagen"
                  src="/imagenes/remo.jpg"
                  alt="Remo"
                  width="200px"
                  height="200px"
                />
                <h2>Remo</h2>
              </a>
            </div>

            <div class="caja-Area-Cross">
              <a href="">
                <img
                  class="imagen"
                  src="/imagenes/Crossfit.jpg"
                  alt="Area de CrossfitS"
                  width="200px"
                  height="200px"
                />
                <h2>Area de Crossfit</h2>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.contenedor-2 {
  /*background-color: blue;*/
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2em;
  margin: 1em;
}
.imagenes-maquinas {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2em;
}
.imagen {
  border: 1px solid black;
  border-radius: 50px;
}
.caja-Caminadoras {
  text-align: center;
  margin: auto;
  transition: 1s;
  margin-left: 25px;
}
.caja-Caminadoras a {
  text-decoration: none;
  color: black;
}
.caja-Caminadoras:hover {
  transform: scale(1.3);
}
.caja-Bicicletas {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Bicicletas:hover {
  transform: scale(1.3);
}
.caja-Bicicletas a {
  text-decoration: none;
  color: black;
}
.caja-Banco-Pesas {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Banco-Pesas:hover {
  transform: scale(1.3);
}
.caja-Banco-Pesas a {
  text-decoration: none;
  color: black;
}
.caja-Prensa-Pierna {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Prensa-Pierna:hover {
  transform: scale(1.3);
}
.caja-Prensa-Pierna a {
  text-decoration: none;
  color: black;
}
.caja-Poleas {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Poleas:hover {
  transform: scale(1.3);
}
.caja-Poleas a {
  text-decoration: none;
  color: black;
}
.caja-Eliptica {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Eliptica:hover {
  transform: scale(1.3);
}
.caja-Eliptica a {
  text-decoration: none;
  color: black;
}
.caja-Remo {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Remo:hover {
  transform: scale(1.3);
}
.caja-Remo a {
  text-decoration: none;
  color: black;
}
.caja-Area-Cross {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Area-Cross:hover {
  transform: scale(1.3);
}
.caja-Area-Cross a {
  text-decoration: none;
  color: black;
}
h2 {
  font-size: 2em;
  padding: 0.5em;
}
</style>
