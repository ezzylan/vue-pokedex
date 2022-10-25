<template>
  <v-app>
    <AppBar />
    <v-main class="ma-10">
      <!-- <v-row justify="center"> -->
      <!-- <v-col> -->
      <v-card class="mx-16 d-flex justify-space-around">
        <h1 class="text-capitalize">{{ pokeName }}</h1>
        <h1>#{{ pokeID }}</h1>
      </v-card>
      <v-card class="mt-5 pa-5">
        <v-row>
          <v-col cols="12" sm="6">
            <v-card dark>
              <v-img :aspect-ratio="1 / 1" :src="pokeImg"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <PokeStats1 :pokeColor="pokeColor" :pokeHeight="pokeHeight" :pokeAbilities="pokeAbilities"
              :pokeWeight="pokeWeight" :pokeTypes="pokeTypes" />
            <PokeStats2 :pokeColor="pokeColor" :pokeStats="pokeStats" />
          </v-col>
        </v-row>
      </v-card>
      <!-- </v-col> -->
      <!-- </v-row> -->
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import PokeStats1 from "@/components/PokeStats1.vue";
import PokeStats2 from "@/components/PokeStats2.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  props: [ "pokeData" ],
  components: { AppBar, PokeStats1, PokeStats2, Footer },

  data: () => ({
    pokeName: "",
    pokeID: "",
    pokeImg: "",
    pokeTypes: [],
    pokeColor: "",
    pokeStats: [],
    pokeHeight: 0,
    pokeWeight: 0,
    pokeAbilities: [],
  }),

  methods: {
    fetchPokeName(pokeData) {
      this.pokeName = pokeData.name;
    },
    fetchPokeID(pokeData) {
      this.pokeID = pokeData.id;
    },
    fetchPokeImage(pokeData) {
      this.pokeImg = pokeData.sprites.other[ "official-artwork" ].front_default;
    },
    fetchPokeTypes(pokeData) {
      pokeData.types.forEach((type) => {
        this.pokeTypes.push(type.type.name);
      });
    },
    fetchPokeColor(pokeTypes) {
      switch (pokeTypes[ 0 ]) {
        case "normal":
          this.pokeColor = "amber accent-2";
          break;

        case "fire":
          this.pokeColor = "orange";
          break;

        case "water":
          this.pokeColor = "blue";
          break;

        case "grass":
          this.pokeColor = "green";
          break;

        case "electric":
          this.pokeColor = "yellow";
          break;

        case "ice":
          this.pokeColor = "cyan";
          break;

        case "fighting":
          this.pokeColor = "red";
          break;

        case "poison":
          this.pokeColor = "purple";
          break;

        case "ground":
          this.pokeColor = "orange accent-2";
          break;

        case "flying":
          this.pokeColor = "deep-purple";
          break;

        case "psychic":
          this.pokeColor = "pink";
          break;

        case "bug":
          this.pokeColor = "lime";
          break;

        case "rock":
          this.pokeColor = "yellow lighten-2";
          break;

        case "ghost":
          this.pokeColor = "deep-purple lighten-1";
          break;

        case "dark":
          this.pokeColor = "brown";
          break;

        case "dragon":
          this.pokeColor = "deep-purple accent-1";
          break;

        case "steel":
          this.pokeColor = "grey";
          break;

        case "fairy":
          this.pokeColor = "red lighten-4";
          break;

        default:
          break;
      }
    },
    fetchPokeStats(pokeData) {
      pokeData.stats.forEach((stat) => {
        this.pokeStats.push(stat);
      });
    },
    fetchPokeHeight(pokeData) {
      this.pokeHeight = pokeData.height;
    },
    fetchPokeWeight(pokeData) {
      this.pokeWeight = pokeData.weight;
    },
    fetchPokeAbilities(pokeData) {
      pokeData.abilities.forEach((ability) => {
        this.pokeAbilities.push(ability.ability);
      });
    },
  },

  created() {
    this.fetchPokeName(this.pokeData);
    this.fetchPokeID(this.pokeData);
    this.fetchPokeImage(this.pokeData);
    this.fetchPokeTypes(this.pokeData);
    this.fetchPokeColor(this.pokeTypes);
    this.fetchPokeStats(this.pokeData);
    this.fetchPokeHeight(this.pokeData);
    this.fetchPokeWeight(this.pokeData);
    this.fetchPokeAbilities(this.pokeData);
    // console.log(this.pokeData);
  },
};
</script>

<style>
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  h1 {
    font-size: 3rem;
  }
}
</style>