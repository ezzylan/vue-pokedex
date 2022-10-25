<template>
  <v-card dark>
    <v-card-title>Stats</v-card-title>
    <v-card-text>
      <div v-for="(pokeStat, i) in pokeStats" :key="i">
        <v-col>
          {{ pokeStat.stat.name }}
          <v-progress-linear :color="pokeColor" height="10" :value="pokeStat.base_stat" striped class="mt-1">
          </v-progress-linear>
        </v-col>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: [ "pokeColor", "pokeStats" ],
};
</script>