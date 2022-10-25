<template>
  <v-app>
    <v-img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" class="ma-10" contain
      max-height="150" />
    <v-main class="mb-10 mx-10">
      <v-row class="text-center">
        <v-col v-for="(pokeData, index) in allPokeData" :key="index">
          <PokeCards :pokeData="pokeData" />
        </v-col>
      </v-row>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import PokeCards from "@/components/PokeCards.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: { PokeCards, Footer },
  computed: { ...mapGetters({ allPokeData: "getAllPokeData" }) },
};
</script>
