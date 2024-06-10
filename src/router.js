import { createRouter, createWebHistory } from "vue-router";

import TicketSearch from "./pages/TicketSearch.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component: TicketSearch
    }
  ]
});

export { router };