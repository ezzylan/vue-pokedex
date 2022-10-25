<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: { ...mapActions([ "fetchPokeData" ]) },
  mounted() {
    this.fetchPokeData();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Righteous", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png);
  background-repeat: repeat;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
