<template>
  <main>
    <section>
      <h2>
        <router-link to="/home"> Home </router-link> //
        <router-link to="/home/machines"> Maquinas </router-link> // Remo
      </h2>

      <article class="Container">
        <div class="Container-Image">
          <img :src="`${Image}`" alt="Remo" />
        </div>

        <div class="Container-Description">
          <div class="subtitulo">Eliptica</div>

          <div class="Container-Remo">
            <img
              v-for="i in 10"
              :key="`${i}`"
              :src="`${Image}`"
              alt="Remo"
              width="120px"
              height="110px"
            />
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "Mach-remo",
  data() {
    return {
      Image:
        "https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/remo.jpg?alt=media&token=d0a774fc-5f7d-41e9-93bb-c4771530a868",
    };
  },
};
</script>

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
.Container-Remo {
  display: flex;
  width: 100%;
  height: 80%;
  /* background-color: saddlebrown; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.Container-Remo img {
  margin: 10px;
}
</style>
