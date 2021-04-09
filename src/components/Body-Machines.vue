<template>
  <div>
    <main>
      <section>
        <h1><router-link to="/home/"> Home </router-link> // Maquinas //</h1>
        <div class="contenedor-2">
          <div class="imagenes-maquinas">
            <div class="caja-maquina">
              <a href="">
                <img
                  class="imagen"
                  src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/caminadora.jpg?alt=media&token=75f3a02b-21a5-4187-9704-560cf6fc7f29"
                  alt="Caminadora"
                  width="200px"
                  height="200px"
                />
                <h2>Caminadoras</h2>
              </a>
            </div>

            <div class="caja-maquina">
              <a href="/">
                <img
                  class="imagen"
                  src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/bicycle.png?alt=media&token=c1f63916-d5b9-4369-a730-019fbe1ce9ed"
                  alt="Bicicleta"
                  width="200px"
                  height="200px"
                />
                <h2>Bicicletas</h2>
              </a>
            </div>

            <div class="caja-maquina">
              <a href="">
                <img
                  class="imagen"
                  src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/prensa-pierna.jpg?alt=media&token=7c8b2882-b61a-4b5a-83c7-3b711395bd46"
                  alt="Prensa de Pierna"
                  width="200px"
                  height="200px"
                />
                <h2>Prensa Pierna</h2>
              </a>
            </div>

            <div class="caja-maquina">
              <a href="">
                <img
                  class="imagen"
                  src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/banco-pesas.jpg?alt=media&token=63063c8b-a659-4af5-ae48-ddf996029adb"
                  alt="Banco de pesas"
                  width="200px"
                  height="200px"
                />
                <h2>Banco de Pesas</h2>
              </a>
            </div>
          </div>

          <div class="imagenes-maquinas">
            <div class="caja-maquina">
              <a href="/">
                <img
                  class="imagen"
                  src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/poleas.jpg?alt=media&token=01bfbee0-e057-480e-ba5f-b99205d6b018"
                  alt="Poleas"
                  width="200px"
                  height="200px"
                />
                <h2>Poleas</h2>
              </a>
            </div>

            <div class="caja-maquina">
              <router-link to="/home/machines/eliptica">
                <img
                  class="imagen"
                  src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/eliptica.jpg?alt=media&token=c5e67941-660f-4884-b5fc-e1b4662ba308"
                  alt="Eliptica"
                  width="200px"
                  height="200px"
                />
                <h2>Eliptica</h2>
              </router-link>
            </div>

            <div class="caja-maquina">
              <a href="/">
                <img
                  class="imagen"
                  src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/remo.jpg?alt=media&token=d0a774fc-5f7d-41e9-93bb-c4771530a868"
                  alt="Remo"
                  width="200px"
                  height="200px"
                />
                <h2>Remo</h2>
              </a>
            </div>

            <div class="caja-maquina">
              <a href="">
                <img
                  class="imagen"
                  src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/crossfit.jpg?alt=media&token=e9fa51f1-9d83-4270-ae36-2b0035b17725"
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
  align-items: center;
  justify-content: center;
}
.imagenes-maquinas {
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
}
.imagen {
  border: 1px solid black;
  border-radius: 50px;
}

.caja-maquina {
  background: rgba(14, 14, 14, 0.8);
  text-align: center;
  margin: auto;
  transition: 1s;
  margin-bottom: 15px;
  border-radius: 10px;
  width: 270px;
}
.caja-maquina a {
  text-decoration: none;
  color: #c8eed9;
}
.caja-maquina:hover {
  transform: scale(1.1);
}
h2 {
  font-size: 2em;
  padding: 0.5em;
}
</style>
