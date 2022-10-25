import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://pokeapi.co/api/v2/pokemon";
const urlLimit = "?limit=151";

export default new Vuex.Store({
	state: { allPokeData: [] },

	mutations: {
		setPokeData(state, payload) {
			state.allPokeData.push(payload);
		},
	},

	actions: {
		fetchPokeData(state) {
			const axios = require("axios");
			axios
				.get(url + urlLimit)
				.then((response) => {
					return response.data.results;
				})
				.then((results_array) => {
					results_array.forEach((result) => {
						axios
							.get(url + `/${result.name}`)
							.then((pokemon) =>
								state.commit("setPokeData", pokemon.data)
							);
					});
				})
				.catch((err) => console.log(err.message));
		},
	},

	getters: { getAllPokeData: (state) => state.allPokeData },
});
