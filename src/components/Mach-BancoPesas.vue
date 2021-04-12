<template>
  <main>
    <section>
      <h2>
        <router-link to="/home"> Home </router-link> //
        <router-link to="/home/machines"> Maquinas </router-link> // Banco de
        pesas
      </h2>

      <article class="Container">
        <div class="Container-Image">
          <img class="size-image" :src="`${Image}`" alt="Banco de pesas" />
        </div>

        <div class="Container-Description">
          <div class="subtitulo">Banco de pesas</div>

          <div class="Container-Eliptica">
            <img
              v-for="i in 10"
              :key="`${i}`"
              :src="`${Image}`"
              alt="Banco de pesas"
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
  name: "Mach-banco-pesas",
  data() {
    return {
      Image:
        "https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/banco-pesas.jpg?alt=media&token=63063c8b-a659-4af5-ae48-ddf996029adb",
    };
  },
};
</script>

<style>
.size-image {
  width: 100%;
  height: 100%;
}
h2 {
  font-size: 2em;
  padding: 10px;
}
h2 a {
  text-decoration: none;
  color: black;
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
  margin: 4px;
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
.Container-Eliptica {
  display: flex;
  width: 100%;
  height: 80%;
  /* background-color: saddlebrown; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.Container-Eliptica img {
  margin: 10px;
}
</style>
