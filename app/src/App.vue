<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Motorcycle Front</a>
      </div>
    </nav>

    <div class="container">
      <form @submit.prevent="saveMotor">
        <label>Modelo</label>
        <input type="text" placeholder="Modelo" v-model="motorcycle.modelo" />
        <label>Ano</label>
        <input type="text" placeholder="Ano" v-model="motorcycle.ano" />
        <label>Placa</label>
        <input type="text" placeholder="Placa" v-model="motorcycle.placa" />
        <label>Categoria</label>
        <input
          type="text"
          placeholder="Categoria"
          v-model="motorcycle.categoria"
        />
        <label>Cor</label>
        <input type="text" placeholder="Cor" v-model="motorcycle.cor" />
        <label>Responsavel</label>
        <input
          type="text"
          placeholder="Responsavel"
          v-model="motorcycle.responsavel"
        />

        <button class="waves-effect waves-light btn-small">
          Salvar<i class="material-icons left">save</i>
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Categoria</th>
            <th>Cor</th>
            <th>Responsavel</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="motorcycle of motorcycles" :key="motorcycle.id">
            <td>{{ motorcycle.modelo }}</td>
            <td>{{ motorcycle.ano }}</td>
            <td>{{ motorcycle.placa }}</td>
            <td>{{ motorcycle.categoria }}</td>
            <td>{{ motorcycle.cor }}</td>
            <td>{{ motorcycle.responsavel }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1">
                <i class="material-icons">create</i>
              </button>
              <button class="waves-effect btn-small red darken-1">
                <i class="material-icons">delete_sweep</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MotorCycle from "./services/motorcycle";

export default {
  data() {
    return {
      motorcycle: {
        modelo: "",
        ano: "",
        placa: "",
        categoria: "",
        cor: "",
        responsavel: "",
      },
      motorcycles: [],
    };
  },
  mounted() {
    
    this.getMotor()
  },

  methods: {
    getMotor(){
      MotorCycle.getItems().then((response) => {
      console.log(response.data);
      this.motorcycles = response.data;
    })
    },
    
    saveMotor() {
      MotorCycle.saveItem(this.motorcycle).then(() => {
        alert("Salvo com sucesso")
        this.getMotor()
      });
    },
  },
};
</script>
