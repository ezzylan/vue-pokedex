<template>
  <v-hover v-slot="{ hover }">
    <v-card :elevation="hover ? 24 : 2" shaped class="mx-auto mt-5" :class="pokeColor" width="200">
      <v-img :aspect-ratio="1 / 1" :src="pokeImg"></v-img>
      <div class="d-flex justify-space-between align-center pr-4">
        <v-card-title class="font-weight-bold text-capitalize">
          {{ pokeName }}
        </v-card-title>
        <div class="d-flex">
          <div v-for="(pokeTypeEmoji, i) in pokeTypesEmoji" :key="i">
            {{ pokeTypeEmoji }}
          </div>
        </div>
      </div>

      <v-expand-transition>
        <div v-if="hover" class="transition-fast-in-fast-out pt-0 pa-5">
          <!-- <v-row align="center" justify="space-around">
            <v-btn
              v-for="(pokeTypeEmoji, i) in pokeTypesEmoji"
              :key="i"
              disabled
              rounded
              class="text-capitalize"
              >{{ pokeTypeEmoji }}</v-btn
            > -->
          <v-btn @click="goToPokePage" rounded block>More Info</v-btn>
          <!-- </v-row> -->
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: [ "pokeData" ],

  data: () => ({
    pokeName: "",
    pokeImg: "",
    pokeType: "",
    pokeTypes: [],
    pokeTypesEmoji: [],
    pokeColor: "",
  }),

  methods: {
    fetchPokeName(pokeData) {
      this.pokeName = pokeData.name;
    },
    fetchPokeImage(pokeData) {
      this.pokeImg = pokeData.sprites.other[ "official-artwork" ].front_default;
    },
    fetchPokeTypes(pokeData) {
      pokeData.types.forEach((type) => {
        switch (type.type.name) {
          case "normal":
            this.pokeType = "🙂";
            break;

          case "fire":
            this.pokeType = "🔥";
            break;

          case "water":
            this.pokeType = "🌊";
            break;

          case "grass":
            this.pokeType = "🍃";
            break;

          case "electric":
            this.pokeType = "⚡";
            break;

          case "ice":
            this.pokeType = "🧊";
            break;

          case "fighting":
            this.pokeType = "💪🏻";
            break;

          case "poison":
            this.pokeType = "💉";
            break;

          case "ground":
            this.pokeType = "🗻";
            break;

          case "flying":
            this.pokeType = "🐦";
            break;

          case "psychic":
            this.pokeType = "💫";
            break;

          case "bug":
            this.pokeType = "🐛";
            break;

          case "rock":
            this.pokeType = "🥌";
            break;

          case "ghost":
            this.pokeType = "👻";
            break;

          case "dark":
            this.pokeType = "🌑";
            break;

          case "dragon":
            this.pokeType = "🐉";
            break;

          case "steel":
            this.pokeType = "🔩";
            break;

          case "fairy":
            this.pokeType = "🔮";
            break;

          default:
            break;
        }
        this.pokeTypesEmoji.push(this.pokeType);
      });
    },
    fetchPokeColor(pokeData) {
      switch (pokeData.types[ 0 ].type.name) {
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
    goToPokePage() {
      this.$router.push({
        name: "PokePage",
        params: { pokeData: this.pokeData },
      });
    },
  },

  created() {
    this.fetchPokeName(this.pokeData);
    this.fetchPokeImage(this.pokeData);
    this.fetchPokeTypes(this.pokeData);
    this.fetchPokeColor(this.pokeData);
  },
};
</script>

