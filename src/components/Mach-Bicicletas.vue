<template>
  <main>
    <section>
      <h2>
        <a href="/index.html">Home </a> - >
        <a href="/Maquinas.html"> Maquinas </a>- > <a href="">Bicicletas </a>
      </h2>

      <article class="Container">
        <div class="Container-Image">
          <img src="/imagenes/Bicicleta.jpeg" alt="Bicicletas" />
        </div>

        <div class="Container-Description">
          <div class="subtitulo">Bicicletas</div>

          <div class="Container-Bicicleta">
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-1"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-2"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-3"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-4"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-5"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-6"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-7"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-8"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-9"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-10"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-11"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Bicicleta.jpeg"
              alt="Bicicleta-12"
              width="120px"
              height="110px"
            />
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style>
h2 {
  font-size: 2em;
  padding: 10px;
}
h2 a {
  text-decoration: none;
  color: black;
}
h2 {
  padding: 0.5em;
}
.Container {
  width: 100%;
  height: 75.3vh;
  /* background-color: blue; */
  display: flex;
}
.Container-Image {
  display: flex;
  width: 40%;
  height: 100%;
  /* background-color: brown; */
  align-items: center;
  justify-content: center;
}
.Container-Image img {
  border-radius: 5px;
}
.Container-Description {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subtitulo {
  font-size: 4rem;
  width: 100%;
  height: auto;
  text-align: center;
}
.Container-Bicicleta {
  display: flex;
  width: 100%;
  height: 80%;
  /* background-color: saddlebrown; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.Container-Bicicleta img {
  margin: 10px;
}
</style>
