<template>
  <main>
    <section>
      <h2>
        <a href="/index.html">Home </a> - >
        <a href="/Maquinas.html"> Maquinas </a>- >
        <a href="">Prensa de pierna </a>
      </h2>

      <article class="Container">
        <div class="Container-Image">
          <img src="/imagenes/Prensa.png" alt="Prensa de pierna" />
        </div>

        <div class="Container-Description">
          <div class="subtitulo">Prensa de Pierna</div>

          <div class="Container-PrensaPierna">
            <img
              src="/imagenes/Prensa.png"
              alt="Prensa de pierna"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Prensa.png"
              alt="Prensa de pierna"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Prensa.png"
              alt="Prensa de pierna"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Prensa.png"
              alt="Prensa de pierna"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Prensa.png"
              alt="Prensa de pierna"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Prensa.png"
              alt="Prensa de pierna"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Prensa.png"
              alt="Prensa de pierna"
              width="120px"
              height="110px"
            />
            <img
              src="/imagenes/Prensa.png"
              alt="Prensa de pierna"
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
h2,
h1 {
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
.Container-PrensaPierna {
  display: flex;
  width: 100%;
  height: 80%;
  /* background-color: saddlebrown; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.Container-PrensaPierna img {
  margin: 10px;
}
</style>
