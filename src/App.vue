<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import TicketSearch from "./pages/TicketSearch.vue";

export default {
    components: {
        AppHeader,
        TicketSearch
    },
    data() {
        return {
            store,
        };
    },
    created() {
    },
}
</script>

<template>
    <AppHeader />
    <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>