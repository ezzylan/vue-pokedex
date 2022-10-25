<template>
  <v-card class="py-1 mb-5" :color="pokeColor">
    <v-row>
      <v-col>
        <v-card-text class="text-capitalize">
          <div class="d-flex justify-center mb-5">
            <h2>Height:&nbsp;</h2>
            <h2 class="font-weight-regular">{{ pokeHeight }}</h2>
          </div>
          <div class="d-flex flex-column justify-center">
            <h2 class="pb-2">Abilities</h2>
            <div v-for="(pokeAbility, i) in pokeAbilities" :key="i">
              {{ pokeAbility.name }}
            </div>
          </div>
        </v-card-text>
      </v-col>
      <v-col>
        <v-card-text class="text-capitalize">
          <div class="d-flex justify-center mb-5">
            <h2>Weight:&nbsp;</h2>
            <h2 class="font-weight-regular">{{ pokeWeight }}</h2>
          </div>
          <div class="d-flex flex-column justify-center">
            <h2 class="pb-2">Types</h2>
            <div v-for="(pokeType, i) in pokeTypes" :key="i">
              {{ pokeType }}
            </div>
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: [
    "pokeColor",
    "pokeHeight",
    "pokeAbilities",
    "pokeWeight",
    "pokeTypes",
  ],
};
</script>