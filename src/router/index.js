import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PokePage from "../views/PokePage.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/:pokeName",
		name: "PokePage",
		component: PokePage,
		props: true,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
