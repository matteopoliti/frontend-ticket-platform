<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";

export default {
    components: {
        AppHeader,
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
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>