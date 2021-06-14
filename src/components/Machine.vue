<template>
  <main>
    <section>
      <h2>
        <router-link to="/home"> Home </router-link> //
        <router-link to="/home/machines"> Maquinas </router-link> //
        {{ machine.title }}
      </h2>

      <article class="Container">
        <div class="Container-Image">
          <img
            class="size-image"
            :src="`${machine.image}`"
            :alt="machine.title"
          />
        </div>

        <div class="Container-Description">
          <div class="subtitulo">{{ machine.title }}</div>

          <div class="Container-Eliptica">
            <img
              v-for="i in 10"
              :key="`${i}`"
              :src="`${machine.image}`"
              alt="Poleas"
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
import { getMachine } from "@/fetchMachines";
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
      this.machine = getMachine(idmachine);
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
</style>
