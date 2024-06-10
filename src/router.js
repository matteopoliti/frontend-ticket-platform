import { createRouter, createWebHistory } from "vue-router";

import TicketSearch from "./pages/TicketSearch.vue";
import HomePage from "./pages/HomePage.vue";
import Contacts from "./pages/Contacts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
      path: '/search',
        name: 'ticket',
        component: TicketSearch
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    }
  ]
});

export { router };