<template>
  <main>
    <section>
      <h2>
        <router-link to="/home"> Home </router-link> //
        <router-link to="/home/machines"> Maquinas </router-link> //
        {{ machine.nombre }}
      </h2>

      <article class="Container">
        <div class="Container-Image">
          <img
            class="size-image"
            :src="`${machine.imagen}`"
            :alt="machine.nombre"
          />
        </div>

        <div class="Container-Description">
          <div class="subtitulo">{{ machine.nombre }}</div>

          <div class="Container-Eliptica">
            <div
              class="backgroud-machine"
              v-for="i in machine.cantidad"
              :key="`${i}`"
            >
              <img
                :src="`${machine.imagen}`"
                alt="Poleas"
                width="120px"
                height="110px"
              />
              <p class="text-center">{{ machine.estado | membresia }}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "MachineView",
  data() {
    return {
      machine: {},
    };
  },
  created() {
    this.machineGET();
  },
  methods: {
    machineGET() {
      const idmachine = this.$route.params.id;
      console.log(idmachine);
      axios
        .get("http://localhost:5000/home/machine/" + idmachine)
        .then((data) => {
          this.machine = data.data;
        });
    },
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
.text-center {
  text-align: center;
  color: black;
  font-size: 1.3rem;
}
.backgroud-machine {
  background-color: rgb(155, 146, 146);
  margin: 5px;
  border-radius: 5px;
}
</style>
