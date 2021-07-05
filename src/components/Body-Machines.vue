<template>
  <div class="percent">
    <main class="percent">
      <section class="percent">
        <h2><router-link to="/home/"> Home </router-link> // Maquinas //</h2>
        <div class="contenedor-2 percent">
          <div class="imagenes-maquinas">
            <div
              class="caja-maquina"
              v-for="machine in arrayMachines"
              :key="machine._id"
            >
              <router-link
                :to="{
                  path: `machines/${machine._id}`,
                }"
              >
                <img
                  class="imagen"
                  :src="machine.imagen"
                  :alt="machine.nombre"
                />
                <h2>{{ machine.nombre }}</h2>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Body-machines",
  data() {
    return {
      arrayMachines: [],
    };
  },
  created() {
    this.getMachines();
  },
  methods: {
    getMachines() {
      axios.get("http://localhost:5000/home/maquina").then((data) => {
        this.arrayMachines = data.data;
      });
    },
  },
};
</script>
<style>
.contenedor-2 {
  /*background-color: blue;*/
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.imagenes-maquinas {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 80%;
  align-items: center;
  justify-content: center;
}
.imagen {
  width: 200px;
  height: 200px;
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
.percent {
  height: 80%;
}
</style>
